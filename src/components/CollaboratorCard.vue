<script setup lang="ts">
import { openLink } from '@/composables/utility'

defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  link: {
    type: [String, null],
    default: null
  }
})

function openSocialLink(link: string | null) {
  if (link) {
    openLink(link)
  }
}
</script>

<template>
  <div class="collaborator" :class="{ hoverable: link }" @click="openSocialLink(link)">
    <img src="/images/icons/person.png" class="profile" />
    <h1 class="name">{{ name }}</h1>
    <h2 class="role">{{ role }}</h2>
  </div>
</template>

<style scoped>
.collaborator {
  width: clamp(150px, 121.4286px + 8.9286vw, 250px);
  height: clamp(150px, 121.4286px + 8.9286vw, 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 45px;
  background-color: var(--color-card);
  text-align: center;
  padding: 25px;
  overflow-y: auto;
}

.collaborator::-webkit-scrollbar {
  display: none;
}

.hoverable {
  cursor: pointer;
}

.hoverable:hover {
  background-color: var(--color-highlight);
  outline: 2px solid var(--color-neon);
}

.profile {
  width: clamp(64px, 45.7143px + 5.7143vw, 128px);
  height: clamp(64px, 45.7143px + 5.7143vw, 128px);
}

.name {
  font: var(--text-subtitle);
}

.role {
  font: var(--text-label-bold);
}
</style>
