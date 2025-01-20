import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorkStore = defineStore('work', () => {
  const loading = ref(false)
  const error = ref(null)
  const work = ref([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchWorkUseCase)
      const data = await usecase.execute()
      work.value = data
    } catch (err) {
      error.value = 'Failed to fetch work experience details.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, work }
})
