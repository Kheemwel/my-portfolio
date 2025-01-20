<script setup>
import ProjectLayout from '@/components/layouts/ProjectLayout.vue'
import ProjectCollaborators from '@/components/sub-components/ProjectCollaborators.vue'
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue'
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue'
import { useProjectDetailStore } from '@/stores/project-detail-store'
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const projectDetailStore = useProjectDetailStore()
const { projectDetail } = storeToRefs(projectDetailStore)
const route = useRoute()

function fetchProjectDetails(title) {
  if (title) {
    projectDetailStore.fetchProjectDetail(title)
  }
}

onMounted(() => {
  fetchProjectDetails(route.params.title)
})

watch(
  () => route.params.title,
  (newTitle) => {
    fetchProjectDetails(newTitle)
  }
)
</script>

<template>
  <ProjectLayout
    :logo="projectDetail.logo"
    :title="projectDetail.title"
    :hasCollaborators="projectDetail.collaborators && projectDetail.collaborators.length > 0"
  >
    <template #overview>
      <ProjectOverview
        :tags="projectDetail.tags"
        :images="projectDetail.images"
        :description="projectDetail.description"
      />
    </template>
    <template #technical>
      <ProjectTechnicalDetails
        :codeLink="projectDetail.codeLink"
        :designLink="projectDetail.designLink"
        :downloadLink="projectDetail.downloadLink"
        :siteLink="projectDetail.siteLink"
        :role="projectDetail.role"
        :date="projectDetail.date"
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
