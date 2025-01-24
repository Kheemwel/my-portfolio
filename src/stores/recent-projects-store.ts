import type { FetchRecentProjectsUseCase } from '@/application/usecases/project_usecases/fetch-recent-projects-usecase'
import { TYPES } from '@/composables/types'
import type { ProjectSummary } from '@/domain/entities/project-summary'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecentProjectsStore = defineStore('recent-projects', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const recentProjects = ref<ProjectSummary[]>([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchRecentProjectsUseCase>(TYPES.FetchRecentProjectsUseCase)
      const recentProjectsCount = import.meta.env.VITE_RECENT_PROJECTS_COUNT
      const data = await usecase.execute(recentProjectsCount)
      recentProjects.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch recent projects.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, recentProjects }
})
