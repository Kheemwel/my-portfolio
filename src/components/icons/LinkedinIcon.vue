<script setup>
import TooltipWidget from '../widgets/TooltipWidget.vue'

defineProps({
  size: {
    type: String,
    default: '64px'
  },
  tooltip: {
    type: String,
    default: 'Linkedin'
  }
})
</script>

<template>
  <TooltipWidget :tooltip="tooltip">
    <svg :width="size" :height="size" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50.6667 8C52.0812 8 53.4377 8.5619 54.4379 9.5621C55.4381 10.5623 56 11.9188 56 13.3333V50.6667C56 52.0812 55.4381 53.4377 54.4379 54.4379C53.4377 55.4381 52.0812 56 50.6667 56H13.3333C11.9188 56 10.5623 55.4381 9.5621 54.4379C8.5619 53.4377 8 52.0812 8 50.6667V13.3333C8 11.9188 8.5619 10.5623 9.5621 9.5621C10.5623 8.5619 11.9188 8 13.3333 8H50.6667ZM49.3333 49.3333V35.2C49.3333 32.8944 48.4174 30.6832 46.7871 29.0529C45.1568 27.4226 42.9456 26.5067 40.64 26.5067C38.3733 26.5067 35.7333 27.8933 34.4533 29.9733V27.0133H27.0133V49.3333H34.4533V36.1867C34.4533 34.1333 36.1067 32.4533 38.16 32.4533C39.1501 32.4533 40.0997 32.8467 40.7999 33.5468C41.5 34.2469 41.8933 35.1965 41.8933 36.1867V49.3333H49.3333ZM18.3467 22.8267C19.5348 22.8267 20.6743 22.3547 21.5145 21.5145C22.3547 20.6743 22.8267 19.5348 22.8267 18.3467C22.8267 15.8667 20.8267 13.84 18.3467 13.84C17.1514 13.84 16.0051 14.3148 15.16 15.16C14.3148 16.0051 13.84 17.1514 13.84 18.3467C13.84 20.8267 15.8667 22.8267 18.3467 22.8267ZM22.0533 49.3333V27.0133H14.6667V49.3333H22.0533Z"
      />
      <defs>
        <radialGradient
          id="paint0_radial_29_79"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 8) rotate(45) scale(67.8823)"
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
  fill: url(#paint0_radial_29_79);
  cursor: pointer;
}

svg:hover {
  fill: var(--color-neon);
  outline: 1px solid var(--color-neon);
  border-radius: 10px;
}
</style>
