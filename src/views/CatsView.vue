<template>
    <div class="catCompoContainer">
        <h1>List of Cats</h1>
        <ul class="cardsList">
            <div class="catCard" v-for="cat in returnedCats" :key="cat.id">
                <li class="card_item">
                    <div>
                        <CatCompo :cat="cat"/>
                    </div>
                </li>
            </div>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import CatCompo from '@/components/CatCompo.vue'
import { Cat } from '@/models/Cat'
import { useGlobalStore } from '@/store/GlobalStore'
import { computed } from 'vue'

const store = useGlobalStore()
store.getCats()

const props = defineProps<{
cats: Cat[]
}>()
const returnedCats = store.cats
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main{
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}
.cardsList {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}
@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}
</style>
