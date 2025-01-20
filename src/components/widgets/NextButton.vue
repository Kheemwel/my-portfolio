<script setup>
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
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9067 44.2133L35.12 32L22.9067 19.76L26.6667 16L42.6667 32L26.6667 48L22.9067 44.2133Z"
      />
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
