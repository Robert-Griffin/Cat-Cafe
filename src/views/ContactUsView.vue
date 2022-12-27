<template>
  <div class="howToContact">
    <h3>Please use the form below to contact us.</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, hic.
      Magnam delectus minus doloremque quas!
    </p>
  </div>
  <div class="contactForm">
    <form>
      <label>Name</label>
      <input type="text" v-model="name"/>

      <label>Email</label>
      <input type="text" v-model="email"/>

      <label>Message</label>
      <textarea v-model="message" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
</script>

<style></style>
