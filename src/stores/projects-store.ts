import type { FetchProjectsUseCase } from '@/application/usecases/project_usecases/fetch-projects-usecase'
import { TYPES } from '@/composables/types'
import type { ProjectSummary } from '@/domain/entities/project-summary'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const projects = ref<ProjectSummary[]>([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchProjectsUseCase>(TYPES.FetchProjectsUseCase)
      const data = await usecase.execute()
      projects.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch projects.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, projects }
})
