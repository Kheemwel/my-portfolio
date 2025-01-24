<script setup lang="ts">
import TooltipWidget from '../widgets/TooltipWidget.vue'

defineProps({
  size: {
    type: String,
    default: '64px'
  },
  tooltip: {
    type: String,
    default: 'Facebook'
  }
})
</script>

<template>
  <TooltipWidget :tooltip="tooltip">
    <svg :width="size" :height="size" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M58.6667 32C58.6667 17.28 46.72 5.33337 32 5.33337C17.28 5.33337 5.33334 17.28 5.33334 32C5.33334 44.9067 14.5067 55.6534 26.6667 58.1334V40H21.3333V32H26.6667V25.3334C26.6667 20.1867 30.8533 16 36 16H42.6667V24H37.3333C35.8667 24 34.6667 25.2 34.6667 26.6667V32H42.6667V40H34.6667V58.5334C48.1333 57.2 58.6667 45.84 58.6667 32Z"
      />
      <defs>
        <radialGradient
          id="paint0_radial_94_915"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.33334 5.33337) rotate(44.9283) scale(75.3305 75.3303)"
        >
          <stop stop-color="var(--color-neon)" />
          <stop offset="1" stop-color="var(--color-primary)" />
        </radialGradient>
      </defs>
    </svg>
  </TooltipWidget>
</template>

<style scoped>
svg {
  fill: url(#paint0_radial_94_915);
  cursor: pointer;
}

svg:hover {
  fill: var(--color-neon);
  outline: 1px solid var(--color-neon);
  border-radius: 10px;
}
</style>
