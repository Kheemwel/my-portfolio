import type { FetchProjectTitleListUseCase } from '@/application/usecases/project_usecases/fetch-project-title-list-usecase'
import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectTitleListStore = defineStore('project-title-list', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const projectTitleList = ref<string[]>([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchProjectTitleListUseCase>(TYPES.FetchProjectTitleListUseCase)
      const data = await usecase.execute()
      projectTitleList.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch project title list.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, projectTitleList }
})
