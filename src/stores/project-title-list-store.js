import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectTitleListStore = defineStore('project-title-list', () => {
  const loading = ref(false)
  const error = ref(null)
  const projectTitleList = ref([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchProjectTitleListUseCase)
      const data = await usecase.execute()
      projectTitleList.value = data
    } catch (err) {
      error.value = 'Failed to fetch project title list.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, projectTitleList }
})
