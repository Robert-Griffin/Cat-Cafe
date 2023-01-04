<template>
    <div class="catCompoContainer">
        <h1>Our furry friends</h1>
        <ul class="flex flex-wrap justify-center w-full">
            <div v-for="cat in cats" :key="cat.id" class="catCard">
                <li class="card_item">
                    <div>
                        <CatComponent :cat="cat" />
                    </div>
                </li>
            </div>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import CatComponent from '@/components/CatComponent.vue'
import { useGlobalStore } from '@/store/GlobalStore'
import { storeToRefs } from 'pinia'

const storeRefs = storeToRefs(useGlobalStore())
const store = useGlobalStore()
store.getCats()

const cats = storeRefs.cats
</script>

<style></style>
