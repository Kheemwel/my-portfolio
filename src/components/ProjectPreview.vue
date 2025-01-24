<script setup lang="ts">
import router from '@/router'
import TagWidget from './widgets/TagWidget.vue'
import type { PropType } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

function openProject(link: string) {
  router.push(link)
}
</script>

<template>
  <div class="project" @click="openProject(link)">
    <img :src="image" />
    <h1>{{ title }}</h1>
    <div class="tag-list">
      <TagWidget v-for="item in tags" :key="item">{{ item }}</TagWidget>
    </div>
  </div>
</template>

<style scoped>
.project {
  border-radius: 10px;
  background-color: var(--color-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
}

.project:hover {
  background-color: var(--color-highlight);
  outline: 2px solid var(--color-neon);
}

img {
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  user-select: none;
  width: 100%;
}

h1 {
  font: var(--text-title);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  overflow-y: auto;
  padding: 0px 15px;
  align-content: start;
}

@media (min-width: 320px) {
  .project {
    width: 230px;
    height: 195px;
  }

  img {
    height: 128px;
  }

  .tag-list {
    height: 20px;
  }
}

@media (min-width: 768px) {
  .project {
    width: 288px;
    height: 244px;
  }

  img {
    height: 160px;
  }

  .tag-list {
    height: 30px;
  }
}

@media (min-width: 1024px) {
  .project {
    width: 360px;
    height: 280px;
  }

  img {
    height: 200px;
  }

  .tag-list {
    height: 40px;
  }
}

@media (min-width: 1440px) {
  .project {
    width: 450px;
    height: 350px;
  }

  img {
    height: 250px;
  }
}
</style>
