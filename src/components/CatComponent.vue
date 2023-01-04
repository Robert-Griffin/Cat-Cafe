<template>
    <div class="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-md">
        <img class="object-cover rounded-t-lg w-96 h-96" :src="cat.imgUrl" alt="Picture of cat" />
        <div class="h-40 p-5">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ cat.name }}</h3>
            <p class="mb-3 font-normal text-gray-700">{{ cat.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Cat } from '../models/Cat'

defineProps<{
    cat: Cat
}>()
</script>

<style></style>
