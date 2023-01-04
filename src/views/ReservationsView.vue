<template>
    <div class="openReservations">
        <h1>Create Reservation</h1>
        <br />
        <div class="flex flex-col">
            <div class="">
                <label>First Name:</label>
                <input
                    v-model="firstName"
                    class="min-w-0 p-1 ml-1 mr-1 text-right bg-gray-200 rounded"
                    type="text"
                    placeholder="Bob"
                />

                <label class="ml-3">Last Name:</label>
                <input
                    v-model="lastName"
                    class="min-w-0 p-1 ml-1 mr-1 text-right bg-gray-200 rounded"
                    type="text"
                    placeholder="Smith"
                />

                <label class="ml-3">Phone Number:</label>
                <input
                    v-model="phoneNumber"
                    class="min-w-0 p-1 ml-1 mr-1 text-right bg-gray-200 rounded"
                    type="text"
                    placeholder="(555)-123-4567"
                />

                <label class="ml-3">Email:</label>
                <input
                    v-model="email"
                    class="min-w-0 p-1 ml-1 mr-1 text-right bg-gray-200 rounded"
                    type="email"
                    placeholder="Bsmith@domain.com"
                />
            </div>
            <div class="flex justify-center m-8">
                <DatePicker
                    v-model="date"
                    class="pr-10"
                    :clearable="false"
                    :enable-time-picker="false"
                    :min-date="new Date()"
                    inline
                    hide-input-icon
                    auto-apply
                    @update:model-value="handleDateUpdate"
                ></DatePicker>

                <div class="pl-10">
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
            </div>
            <div>
                <button class="p-2 font-bold text-white bg-blue-700 rounded" @click="createReservation">
                    Create Reservation
                </button>
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
        timeslots.map(async (timeslotValue: ITimeslot) => {
            const dateWithReservationTime = new Date(date.value.toDateString())
            dateWithReservationTime.setHours(timeslotValue.startTime)
            const existingReservation = await store.fetchReservationsByDate(dateWithReservationTime, collection)
            return {
                ...timeslotValue,
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

<style></style>
