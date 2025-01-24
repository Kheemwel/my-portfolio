<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: '160px'
  },
  value: {
    type: Number,
    required: true
  },
  trackColor: {
    type: String,
    default: 'var(--color-text)'
  },
  indicatorColor: {
    type: String,
    default: 'var(--color-secondary)'
  }
})

const radius = 70
const strokeDasharray = 2 * 3.14 * radius
const strokeDashoffset = ref(strokeDasharray * ((100 - props.value) / 100))
</script>

<template>
  <div class="donut">
    <svg :width="props.size" :height="props.size" viewBox="0 0 160 160" style="transform: rotate(-90deg)">
      <circle :r="radius" cx="80" cy="80" fill="transparent" :stroke="trackColor" stroke-width="20px"></circle>
      <circle
        :r="radius"
        cx="80"
        cy="80"
        fill="transparent"
        :stroke="indicatorColor"
        stroke-linecap="round"
        stroke-width="20px"
        :stroke-dasharray="strokeDasharray"
        :stroke-dashoffset="strokeDashoffset"
      ></circle>
    </svg>
    <span class="number">{{ value }}%</span>
  </div>
</template>

<style scoped>
.donut {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.number {
  position: absolute;
  font: var(--text-mini);
}
</style>
