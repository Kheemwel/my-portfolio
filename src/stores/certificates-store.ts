import type { FetchCertificatesUseCase } from '@/application/usecases/about_usecases/fetch-certificates-usecase'
import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import type { Certificate } from 'crypto'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCertificatesStore = defineStore('certificates', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const certificates = ref<Certificate[]>()

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchCertificatesUseCase>(TYPES.FetchCertificatesUseCase)
      const data = await usecase.execute()
      certificates.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch certificates.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, certificates }
})
