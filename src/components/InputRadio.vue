<template>
    <div class="flex w-24">
        <label>{{ timeLabel }}</label>
        <input
            class="ml-auto"
            name="timeslot"
            type="radio"
            :value="hours"
            :disabled="disabledTimeslot"
            :checked="isChecked"
            @click="$emit('update:modelValue', hours)"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    hours: {
        type: Number,
        required: true,
    },
    disabledTimeslot: {
        type: Boolean,
    },
    isChecked: {
        type: Boolean,
    },
    meridiem: {
        type: String,
    },
})

const timeLabel = computed(() => {
    const timeNumber = props.hours % 12
    const meridiem = props.hours >= 12 ? 'PM' : 'AM'
    return `${timeNumber === 0 ? 12 : timeNumber}:00 ${meridiem}`
})
</script>
