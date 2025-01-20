import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHighlightProjectStore = defineStore('highlight-projects', () => {
  const loading = ref(false)
  const error = ref(null)
  const highlightProjects = ref([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchHighlightProjectsUseCase)
      const data = await usecase.execute()
      highlightProjects.value = data
    } catch (err) {
      error.value = 'Failed to fetch highlight projects.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, highlightProjects }
})
