import type { FetchHighlightProjectsUseCase } from '@/application/usecases/project_usecases/fetch-highlight-projects-usecase'
import { TYPES } from '@/composables/types'
import type { ProjectSummary } from '@/domain/entities/project-summary'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHighlightProjectStore = defineStore('highlight-projects', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const highlightProjects = ref<ProjectSummary[]>([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchHighlightProjectsUseCase>(TYPES.FetchHighlightProjectsUseCase)
      const data = await usecase.execute()
      highlightProjects.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch highlight projects.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, highlightProjects }
})
