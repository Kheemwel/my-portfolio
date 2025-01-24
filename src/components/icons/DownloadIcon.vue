<script setup lang="ts">
import TooltipWidget from '../widgets/TooltipWidget.vue'

defineProps({
  size: {
    type: String,
    default: '48px'
  },
  tooltip: {
    type: String,
    default: 'Download App'
  }
})
</script>

<template>
  <TooltipWidget :tooltip="tooltip">
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 32L14 22L16.8 19.1L22 24.3V8H26V24.3L31.2 19.1L34 22L24 32ZM12 40C10.9 40 9.95867 39.6087 9.176 38.826C8.39333 38.0433 8.00133 37.1013 8 36V30H12V36H36V30H40V36C40 37.1 39.6087 38.042 38.826 38.826C38.0433 39.61 37.1013 40.0013 36 40H12Z"
      />
      <defs>
        <radialGradient
          id="paint0_radial_94_973"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 8) rotate(45) scale(45.2548)"
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
  fill: url(#paint0_radial_94_973);
  cursor: pointer;
}

svg:hover {
  fill: var(--color-neon);
  outline: 1px solid var(--color-neon);
  border-radius: 10px;
}
</style>
