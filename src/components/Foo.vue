<template>
  <div>
    <div>{{ state }}</div>
    <button @click="increase">Click</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  initial: number
}>()

const state = ref(props.initial)

function increase(): void {
  state.value = state.value + 1
}
</script>
