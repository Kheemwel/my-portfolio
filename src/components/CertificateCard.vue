<script setup lang="ts">
import { openLink } from '@/composables/utility'

defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="certificate" @click="openLink(file)">
    <img src="/images/icons/trophy.png" />
    <h1>{{ title }}</h1>
    <h2>{{ date }}</h2>
  </div>
</template>

<style scoped>
.certificate {
  width: clamp(150px, 121.4286px + 8.9286vw, 250px);
  height: clamp(150px, 121.4286px + 8.9286vw, 250px);
  background-color: var(--color-card);
  padding: 25px;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  overflow-y: auto;
}

.certificate::-webkit-scrollbar {
  display: none;
}

.certificate:hover {
  background-color: var(--color-highlight);
  outline: 2px solid var(--color-neon);
}

img {
  width: clamp(64px, 45.7143px + 5.7143vw, 128px);
  height: clamp(64px, 45.7143px + 5.7143vw, 128px);
}

h1 {
  font: var(--text-subtitle);
  text-align: center;
}

h2 {
  font: var(--text-label-bold);
  text-align: center;
}
</style>
