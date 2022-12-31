<template>
    <div>
        <label>{{ labelValue }}:00 {{ meridiem }}</label>
        <input name="timeslot" type="radio" :value="modelValue" @click="$emit('update:modelValue', labelValue)" :disabled="disabledTimeslot" :checked="modelValue == labelValue && disabledTimeslot == false">
    </div>
</template>

<script setup lang="ts">import { computed, ref } from 'vue'

const props = defineProps({
    labelValue: {
        type: Number
    },
    modelValue: {
        type: Number
    },
    disabledTimeslot: {
        type: Boolean
    },
    isChecked: {
        type: Boolean
    }
})
const meridiem = computed(() => {
    return props.labelValue === 8 || props.labelValue === 10 ? 'am' : 'pm'
})
const updateIsChecked = computed(() => {
    return props.disabledTimeslot && props.isChecked ? true : false
})
</script>
