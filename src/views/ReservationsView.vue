<template>
  <div class="aboutReservations">
    <h3>How our reservations work</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      pariatur velit ex facilis magnam impedit laborum fugit sequi veniam! Eum
      enim sunt nemo repudiandae dolor.
    </p>
    <br>
    <button @click="createReservation">Save Reservation</button>
  </div>
  <div class="openReservations">
    <h4>Open Reservations</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio,
      eligendi blanditiis consequuntur, nulla modi ratione fugit ducimus eveniet
      itaque exercitationem?
    </p>
    <br>
    <div>
      <form @submit.prevent="createReservation">
        <div>
          <DatePicker :value="date" @update:model-value="handleDateUpdate" :enable-time-picker="false" :formatDateToString="formatDateToString" :min-date="new Date()" inline text-input inline-with-input auto-apply></DatePicker>
        </div>
        <label>First Name:</label>
        <input type="text" required placeholder="Doug" v-model="firstName">

        <label>Last Name:</label>
        <input type="text" required placeholder="Dimmadome" v-model="lastName">

        <label>Phone Number:</label>
        <input type="text" required placeholder="(555)-867-5309" v-model="phoneNumber">

        <label>Email:</label>
        <input type="email" required placeholder="Email Address" v-model="email">
        <div>
          <ul>
            <li v-for="timeslot in timeSlotOptions" :key="timeslot.startTime">
              <label>{{timeslot.startTime}}</label>
              <input type="radio" v-model="picked" :disabled="timeslot.disabled" :value="timeslot.startTime" :checked="picked == timeslot.startTime">
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <InputRadio />
            </li>
          </ul>
        </div>

        <div>
          <button type="submit">Create Reservation</button>
        </div>
      </form>
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
const picked = ref(8)
const date = ref(new Date())

const timeSlotOptions: Ref<ITimeslotOption[]> = ref([])

onMounted(async () => {
  await updateTimeslotOptions()
})

const updateTimeslotOptions = async () => {
  timeSlotOptions.value = await Promise.all(timeslots.map(async (value: ITimeslot) => {
    const justDate = new Date(date.value.toDateString())
    justDate.setHours(value.startTime)
    const existingReservation = await store.fetchReservationsByDate(justDate, 'reservations')
    return {
      ...value,
      disabled: existingReservation.length > 0
    }
  }))
  console.log(timeSlotOptions.value)
}

const handleDateUpdate = async (modelData: Date) => {
date.value = modelData
await updateTimeslotOptions()
}

const formatDateToString = (date: Date): string => {
            const day = date.getDate()
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            return `${month}/${day}/${year}`
        }

const formatDateToStringDateTime = (date: Date, reservationTime: number): Date => {
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            const time = reservationTime
            return new Date(year, month, day, time)
        }

function createReservation () {
  const reservationDate = formatDateToStringDateTime(date.value, picked.value)
  const reservation = new Reservation(firstName.value, lastName.value, email.value, phoneNumber.value, reservationDate)
  store.createNewReservation(reservation, 'reservations')
}
</script>

<style></style>
