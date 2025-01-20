import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCertificatesStore = defineStore('certificates', () => {
  const loading = ref(false)
  const error = ref(null)
  const certificates = ref([])

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchCertificatesUseCase)
      const data = await usecase.execute()
      certificates.value = data
    } catch (err) {
      error.value = 'Failed to fetch certificates.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, certificates }
})
