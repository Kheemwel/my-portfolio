import type { FetchWorkUseCase } from '@/application/usecases/about_usecases/fetch-work-usecase'
import { TYPES } from '@/composables/types'
import type { Work } from '@/domain/entities/work'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorkStore = defineStore('work', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const work = ref<Work[]>([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchWorkUseCase>(TYPES.FetchWorkUseCase)
      const data = await usecase.execute()
      work.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch work experience details.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, work }
})
