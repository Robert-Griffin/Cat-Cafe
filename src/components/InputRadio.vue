<template>
    <div>
        <label>{{ timeLabel }}</label>
        <input
            name="timeslot"
            type="radio"
            :value="hours"
            @click="$emit('update:modelValue', hours)"
            :disabled="disabledTimeslot"
            :checked="isChecked"
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
