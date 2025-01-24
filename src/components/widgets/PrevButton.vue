<script setup lang="ts">
import TooltipWidget from '../widgets/TooltipWidget.vue'

defineProps({
  size: {
    type: String,
    default: '64px'
  },
  tooltip: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <TooltipWidget :tooltip="tooltip">
    <svg :width="size" :height="size" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.0933 44.2133L28.88 32L41.0933 19.76L37.3333 16L21.3333 32L37.3333 48L41.0933 44.2133Z" />
    </svg>
  </TooltipWidget>
</template>

<style scoped>
svg {
  fill: var(--color-primary);
  cursor: pointer;
}

svg:hover {
  fill: var(--color-neon);
}

svg:active {
  fill: var(--color-neon);
  border-radius: 100%;
  outline: 1px solid var(--color-neon);
}
</style>
