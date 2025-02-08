<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isProjectsActive = computed(() => {
  return route.path.startsWith('/projects') && route.path !== '/projects'
})
</script>

<template>
  <Analytics />
  <nav>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/projects" :class="{ 'router-link-exact-active': isProjectsActive }">Projects</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  border-bottom: 2px solid;
  border-image: var(--gradient-fade-blue-fade-horizontal);
  border-image-slice: 1;
  background-color: var(--color-background);
}

a {
  font: var(--text-header);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

a:hover {
  background-color: var(--color-highlight);
}

a.router-link-exact-active {
  background-color: var(--color-primary);
  font: var(--text-header-bold);
}

main {
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
}

@media (min-width: 320px) {
  a {
    width: 114px;
    height: 28px;
  }
}

@media (min-width: 768px) {
  a {
    width: 133px;
    height: 33px;
  }
}

@media (min-width: 1024px) {
  a {
    width: 160px;
    height: 40px;
  }
}

@media (min-width: 1440px) {
  a {
    width: 200px;
    height: 50px;
  }
}
</style>
