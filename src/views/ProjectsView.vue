<script setup>
import ProjectPreview from '@/components/ProjectPreview.vue';
import { myProjects } from '@/composables/project-list';
</script>

<template>
    <div id="projects">
        <ProjectPreview class="project" v-for="project in myProjects" :key="project.title" :title=project.title
            :image=project.image :tags=project.tags />
    </div>
</template>

<style scoped>
#projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
    padding: 50px;
}
</style>