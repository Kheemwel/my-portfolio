<script setup lang="ts">
import ProjectLayout from '@/components/layouts/ProjectLayout.vue'
import ProjectCollaborators from '@/components/sub-components/ProjectCollaborators.vue'
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue'
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue'
import { formatDate } from '@/composables/utility'
import { useProjectDetailStore } from '@/stores/project-detail-store'
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const projectDetailStore = useProjectDetailStore()
const { projectDetail } = storeToRefs(projectDetailStore)
const route = useRoute()

function fetchProjectDetails(title: string) {
  if (title) {
    projectDetailStore.fetchProjectDetail(title)
  }
}

onMounted(() => fetchProjectDetails(Array.isArray(route.params.title) ? route.params.title[0] : route.params.title))

watch(
  () => route.params.title,
  (newTitle) => fetchProjectDetails(Array.isArray(newTitle) ? newTitle[0] : newTitle)
)
</script>

<template>
  <ProjectLayout
    :logo="projectDetail.logo_url"
    :title="projectDetail.title"
    :hasCollaborators="projectDetail.collaborators !== null && projectDetail.collaborators.length > 0"
  >
    <template #overview>
      <ProjectOverview
        :tags="projectDetail.tags"
        :images="projectDetail.preview_images"
        :description="projectDetail.description"
      />
    </template>
    <template #technical>
      <ProjectTechnicalDetails
        :codeLink="projectDetail.code_link"
        :designLink="projectDetail.design_link"
        :downloadLink="projectDetail.download_link"
        :siteLink="projectDetail.website_link"
        :role="projectDetail.role"
        :date="formatDate(projectDetail.created_at)"
        :languages="projectDetail.languages"
        :frameworks="projectDetail.frameworks"
        :tools="projectDetail.tools"
      />
    </template>
    <template #collaborators>
      <ProjectCollaborators :collaborators="projectDetail.collaborators" />
    </template>
  </ProjectLayout>
</template>
