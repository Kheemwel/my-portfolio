<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const isProjectsActive = computed(() => {
  return route.path.startsWith('/projects') && !route.isExact;
});
</script>

<template>
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
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  border-bottom: 2px solid;
  border-image: var(--gradient-fade-blue-fade-horizontal);
  border-image-slice: 1;
  background-color: var(--color-background);
  flex-shrink: 0;
}

a {
  width: 200px;
  height: 50px;
  font: var(--text-header);
  text-align: center;
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
  height: 100%;
}
</style>
