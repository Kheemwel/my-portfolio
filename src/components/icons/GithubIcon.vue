<script setup>
import TooltipWidget from '../widgets/TooltipWidget.vue'

defineProps({
  size: {
    type: String,
    default: '64px'
  },
  tooltip: {
    type: String,
    default: 'GitHub'
  }
})
</script>

<template>
  <TooltipWidget :tooltip="tooltip">
    <svg :width="size" :height="size" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 5.33337C28.4981 5.33337 25.0304 6.02313 21.7951 7.36325C18.5597 8.70338 15.62 10.6676 13.1438 13.1439C8.14283 18.1448 5.33331 24.9276 5.33331 32C5.33331 43.7867 12.9866 53.7867 23.5733 57.3334C24.9066 57.5467 25.3333 56.72 25.3333 56V51.4934C17.9466 53.0934 16.3733 47.92 16.3733 47.92C15.1466 44.8267 13.4133 44 13.4133 44C10.9866 42.3467 13.6 42.4 13.6 42.4C16.2666 42.5867 17.68 45.1467 17.68 45.1467C20 49.2 23.92 48 25.44 47.36C25.68 45.6267 26.3733 44.4534 27.12 43.7867C21.2 43.12 14.9866 40.8267 14.9866 30.6667C14.9866 27.7067 16 25.3334 17.7333 23.44C17.4666 22.7734 16.5333 20 18 16.4C18 16.4 20.24 15.68 25.3333 19.12C27.44 18.5334 29.7333 18.24 32 18.24C34.2666 18.24 36.56 18.5334 38.6666 19.12C43.76 15.68 46 16.4 46 16.4C47.4666 20 46.5333 22.7734 46.2666 23.44C48 25.3334 49.0133 27.7067 49.0133 30.6667C49.0133 40.8534 42.7733 43.0934 36.8266 43.76C37.7866 44.5867 38.6666 46.2134 38.6666 48.6934V56C38.6666 56.72 39.0933 57.5734 40.4533 57.3334C51.04 53.76 58.6666 43.7867 58.6666 32C58.6666 28.4981 57.9769 25.0305 56.6368 21.7951C55.2966 18.5598 53.3324 15.6201 50.8562 13.1439C48.3799 10.6676 45.4402 8.70338 42.2049 7.36325C38.9695 6.02313 35.5019 5.33337 32 5.33337Z"
      />
      <defs>
        <radialGradient
          id="paint0_radial_94_910"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.33331 5.33337) rotate(44.2975) scale(74.5167 74.4943)"
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
  fill: url(#paint0_radial_94_910);
  cursor: pointer;
}

svg:hover {
  fill: var(--color-neon);
  outline: 1px solid var(--color-neon);
  border-radius: 10px;
}
</style>
