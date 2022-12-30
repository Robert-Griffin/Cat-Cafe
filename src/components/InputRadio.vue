<template>
    <div>
        <label>{{ label }}</label>
        <input type="radio" :value="modelValue">
    </div>
</template>

<script setup lang="ts">

defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Number,
        default: 0
    }
})
</script>
