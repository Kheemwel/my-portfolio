<script setup lang="ts">
import ProjectPreview from '@/components/ProjectPreview.vue'
import { useProjectsStore } from '@/stores/projects-store'
import { storeToRefs } from 'pinia'

const projectsStore = useProjectsStore()
const { projects } = storeToRefs(projectsStore)
</script>

<template>
  <v-container v-if="projectsStore.loading">
    <v-row class="d-flex flex-wrap">
      <v-col v-for="n in 4" :key="n" cols="12" sm="6" md="6" lg="3">
        <v-skeleton-loader type="image" theme="dark" />
      </v-col>
    </v-row>
  </v-container>
  <div id="projects" v-if="$route.path == '/projects' && !projectsStore.loading">
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
