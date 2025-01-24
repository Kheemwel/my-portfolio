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
      <path
        d="M10.6667 48H53.3333C54.8 48 56 46.8 56 45.3333C56 43.8667 54.8 42.6667 53.3333 42.6667H10.6667C9.2 42.6667 8 43.8667 8 45.3333C8 46.8 9.2 48 10.6667 48ZM10.6667 34.6667H53.3333C54.8 34.6667 56 33.4667 56 32C56 30.5333 54.8 29.3333 53.3333 29.3333H10.6667C9.2 29.3333 8 30.5333 8 32C8 33.4667 9.2 34.6667 10.6667 34.6667ZM8 18.6667C8 20.1333 9.2 21.3333 10.6667 21.3333H53.3333C54.8 21.3333 56 20.1333 56 18.6667C56 17.2 54.8 16 53.3333 16H10.6667C9.2 16 8 17.2 8 18.6667Z"
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
