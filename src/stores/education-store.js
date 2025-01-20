import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEducationStore = defineStore('education', () => {
  const loading = ref(false)
  const error = ref(null)
  const education = ref({})

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchEducationUseCase)
      const data = await usecase.execute()
      education.value = data
    } catch (err) {
      error.value = 'Failed to fetch educational background details.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, education }
})
