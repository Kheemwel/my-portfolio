import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const loading = ref(false)
  const error = ref(null)
  const projects = ref([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchProjectsUseCase)
      const data = await usecase.execute()
      projects.value = data
    } catch (err) {
      error.value = 'Failed to fetch projects.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, projects }
})
