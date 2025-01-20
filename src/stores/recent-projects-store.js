import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecentProjectsStore = defineStore('recent-projects', () => {
  const loading = ref(false)
  const error = ref(null)
  const recentProjects = ref([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchRecentProjectsUseCase)
      const recentProjectsCount = import.meta.env.VITE_RECENT_PROJECTS_COUNT
      const data = await usecase.execute(recentProjectsCount)
      recentProjects.value = data
    } catch (err) {
      error.value = 'Failed to fetch recent projects.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, recentProjects }
})
