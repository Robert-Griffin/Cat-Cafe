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
          <DatePicker v-model="date" :enable-time-picker="false" :formatDateToString="formatDateToString" :min-date="new Date()" inline text-input inline-with-input auto-apply></DatePicker>
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
            <li>
              <label>8:00am - 10:00am</label>
              <input type="radio" v-model="picked" :disabled="reserved[0]" value="8" :checked="!reserved[0]">
            </li>
            <li>
              <label>10:00am - 12:00pm</label>
              <input type="radio" v-model="picked" :disabled="reserved[1]"  value="10">
            </li>
            <li>
              <label>12:00pm - 2:00pm</label>
              <input type="radio" v-model="picked" :disabled="reserved[2]"  value="12">
            </li>
            <li>
              <label>2:00pm - 4:00pm</label>
              <input type="radio" v-model="picked" :disabled="reserved[3]" value="2">
            </li>
            <li>
              <label>4:00pm - 6:00pm</label>
              <input type="radio" v-model="picked" :disabled="reserved[4]" value="4">
            </li>
          </ul>
        </div>

        <div>
          <button type="submit">Create Reservation</button>
        </div>
      </form>
    </div>
    <button @click="logDate">Log Date</button>
  </div>
</template>

<script setup lang="ts">

import { Reservation } from '@/models/Reservation'
import { useGlobalStore } from '@/store/GlobalStore'
import DatePicker from '@vuepic/vue-datepicker'
import { storeToRefs } from 'pinia'
import { ref, onMounted, computed } from 'vue'
const storeRefs = storeToRefs(useGlobalStore())
const store = useGlobalStore()
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const email = ref('')
const picked = ref(8)
const date = ref(new Date())
const reserved = ref([false, false, false, false, false])
// const selectedDatesReservations = computed(() => {
//   if(storeRefs.reservationsByDate.value.length !== 0)

// })
// const reserved = computed((res): boolean[] => {
//  res = [false, false, false, false, false]
//  return res
// })

onMounted(async () => {
  // console.log('Component mounted and value of picked is ', picked.value)
  const reservationDate = formatDateToString(date.value)
  await store.fetchReservationsByDate(reservationDate, 'reservations')
  const selectedDatesReservations = storeRefs.reservationsByDate
  // console.log('selectedDateReservations.value is ', selectedDatesReservations.value)
  // console.log('selectedDateReservations is ', selectedDatesReservations)
  selectedDatesReservations.value.forEach((reservation) => {
    // console.log('inside foreach loop, reservations = ', reservation)
    // console.log('inside foreach loop, reservations.time = ', reservation.reservationTime)

    disableReservedTimeslots(reservation.reservationTime)
  })
})

const disableReservedTimeslots = (reservedTimes: number) => {
  switch (reservedTimes) {
    case 8:
      reserved.value[0] = true
      break
    case 10:
      reserved.value[1] = true
      break
    case 12:
      reserved.value[2] = true
      break
    case 2:
      reserved.value[3] = true
      break
    case 4:
      reserved.value[4] = true
      break
    default:
      break
  }
  }

const formatDateToString = (date: Date): string => {
            const day = date.getDate()
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            return `${month}/${day}/${year}`
        }

function logDate () {
  console.log('Running logDate()')

console.log('date.value = ', date.value)
console.log('picked.value = ', picked.value)
const reservationDate = formatDateToString(date.value)
console.log('reservationDate = ', reservationDate)
store.fetchReservationsByDate(reservationDate, 'reservations')
console.log('Fetched reservations for ', reservationDate, ' are ', ...store.reservationsByDate)
}

const formatDateToStringDateTime = (date: Date, reservationTime: number): Date => {
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            const time = reservationTime
            return new Date(year, month, day, time)
        }

function createReservation () {
  const reservationDate = formatDateToString(date.value)
  const reservationTimeNumber = Number(picked.value)
  const reservation = new Reservation(firstName.value, lastName.value, email.value, phoneNumber.value, reservationDate, reservationTimeNumber)
  store.createNewReservation(reservation, 'reservations')
  disableReservedTimeslots(reservationTimeNumber)
}
</script>

<style></style>
