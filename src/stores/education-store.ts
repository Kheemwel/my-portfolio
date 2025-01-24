import type { FetchEducationUseCase } from '@/application/usecases/about_usecases/fetch-education-usecase'
import { TYPES } from '@/composables/types'
import type { Education } from '@/domain/entities/education'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEducationStore = defineStore('education', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const education = ref<Education>()

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchEducationUseCase>(TYPES.FetchEducationUseCase)
      const data = await usecase.execute()
      education.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch educational background details.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, education }
})
