<template>
    <div class="aboutReservations">
        <h3>How our reservations work</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur velit ex facilis magnam
            impedit laborum fugit sequi veniam! Eum enim sunt nemo repudiandae dolor.
        </p>
    </div>
    <div class="openReservations">
        <h4>Open Reservations</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio, eligendi blanditiis consequuntur,
            nulla modi ratione fugit ducimus eveniet itaque exercitationem?
        </p>
        <br />
        <div>
            <div>
                <DatePicker
                    v-model="date"
                    :clearable="false"
                    :enable-time-picker="false"
                    :format-date-to-string="formatDateToString"
                    :min-date="new Date()"
                    inline
                    text-input
                    inline-with-input
                    auto-apply
                    @update:model-value="handleDateUpdate"
                ></DatePicker>
            </div>
            <label>First Name:</label>
            <input v-model="firstName" type="text" required placeholder="Bob" />

            <label>Last Name:</label>
            <input v-model="lastName" type="text" required placeholder="Smith" />

            <label>Phone Number:</label>
            <input v-model="phoneNumber" type="text" required placeholder="(555)-123-4567" />

            <label>Email:</label>
            <input v-model="email" type="email" required placeholder="Bsmith@domain.com" />
            <div>
                <ul>
                    <li v-for="timeslot in timeSlotOptions" :key="timeslot.startTime">
                        <InputRadio
                            v-model="pickedTimeslot"
                            :hours="timeslot.startTime"
                            :disabled-timeslot="timeslot.disabled"
                            :is-checked="isChecked(timeslot)"
                        />
                    </li>
                </ul>
            </div>

            <div>
                <button @click="createReservation">Create Reservation</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Reservation } from '@/models/Reservation'
import { ITimeslot, ITimeslotOption, timeslots } from '@/models/Timeslots'
import { useGlobalStore } from '@/store/GlobalStore'
import DatePicker from '@vuepic/vue-datepicker'
import { ref, onMounted, Ref } from 'vue'
import InputRadio from '@/components/InputRadio.vue'
const store = useGlobalStore()
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const email = ref('')
const pickedTimeslot = ref(8)
const date = ref(new Date())
const collection = 'reservations'

const timeSlotOptions: Ref<ITimeslotOption[]> = ref([])

onMounted(async () => {
    await updateTimeslotOptions()
})

const updateTimeslotOptions = async () => {
    timeSlotOptions.value = await Promise.all(
        timeslots.map(async (value: ITimeslot) => {
            const dateWithReservationTime = new Date(date.value.toDateString())
            dateWithReservationTime.setHours(value.startTime)
            const existingReservation = await store.fetchReservationsByDate(dateWithReservationTime, collection)
            return {
                ...value,
                disabled: existingReservation.length > 0,
            }
        })
    )
    updatePickedTimeslot()
}

const updatePickedTimeslot = () => {
    for (let index = timeSlotOptions.value.length - 1; index >= 0; index--) {
        if (!timeSlotOptions.value[index].disabled) {
            pickedTimeslot.value = timeSlotOptions.value[index].startTime
        }
    }
}

const isChecked = (timeslot: ITimeslot) => {
    return timeslot.startTime === pickedTimeslot.value
}

const handleDateUpdate = async () => {
    console.log('handleDateUpdate is happening', date.value)

    await updateTimeslotOptions()
}

const formatDateToString = (date: Date): string => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
}

const createReservation = () => {
    const reservationDate = date.value
    console.log('reservationDate aka date.value is ', reservationDate)

    reservationDate.setHours(pickedTimeslot.value, 0, 0, 0)
    const reservation = new Reservation(
        firstName.value,
        lastName.value,
        email.value,
        phoneNumber.value,
        reservationDate
    )
    store.createNewReservation(reservation, collection)
    console.log('Reservation is ', reservationDate, reservation)

    updateTimeslotOptions()
    clearForm()
}

const clearForm = () => {
    firstName.value = ''
    lastName.value = ''
    phoneNumber.value = ''
    email.value = ''
    date.value = new Date()
}
</script>

<style>
ul {
    list-style: none;
}
</style>
