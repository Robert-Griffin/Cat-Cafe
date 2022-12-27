<template>
    <div class="card">
        <div class="card_image">
            <img :src="cat.imgUrl" alt="Picture of cat">
        </div>
        <div class="card_content">
            <h3 class="card_title">{{ cat.name }}</h3>
            <p class="card_text">{{ cat.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Cat } from '../models/Cat'

defineProps<{
    cat: Cat
}>()

</script>

<style>
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 50px 25px
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}

.card_image {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
</style>
