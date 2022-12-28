<template>
  <div class="aboutReservations">
    <h3>How our reservations work</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      pariatur velit ex facilis magnam impedit laborum fugit sequi veniam! Eum
      enim sunt nemo repudiandae dolor.
    </p>
    <br>
    <button @click="saveReservation">Save Reservation</button>
  </div>
  <div class="openReservations">
    <h4>Open Reservations</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio,
      eligendi blanditiis consequuntur, nulla modi ratione fugit ducimus eveniet
      itaque exercitationem? Quas fuga similique quae fugiat, quasi corrupti
      architecto corporis nemo rem necessitatibus repudiandae consequuntur
      aperiam saepe ducimus eos eum maxime mollitia nesciunt iure assumenda
      debitis, ab molestias? Repellat, ipsam.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Reservation } from '@/models/Reservation'
import { useGlobalStore } from '@/store/GlobalStore'
const store = useGlobalStore()
const startDate = new Date()
const reservation = new Reservation('123', 'Robert', 'griffin', 'bob@bob.com', '123-123-1234', startDate, startDate, startDate)

function saveReservation () {
  store.createNewReservation(reservation, 'reservations')
}
</script>

<style></style>
