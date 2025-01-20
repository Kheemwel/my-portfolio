<script setup>
import ProjectPreview from '@/components/ProjectPreview.vue'
import { useProjectsStore } from '@/stores/projects-store'
import { storeToRefs } from 'pinia'

const projectsStore = useProjectsStore()
const { projects } = storeToRefs(projectsStore)
</script>

<template>
  <div id="projects" v-if="$route.path == '/projects'">
    <ProjectPreview
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :image="project.cover_url"
      :tags="project.tags"
      :link="`/projects/${project.title}`"
    />
  </div>
  <RouterView />
</template>

<style scoped>
#projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 50px 25px;
  overflow-y: auto;
}
</style>
