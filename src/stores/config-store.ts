import type { FetchConfigUseCase } from "@/application/usecases/config_usecases/fetch-config-usecase"
import type { ConfigMap } from "@/composables/config"
import { TYPES } from "@/composables/types"
import { container } from "@/inversify.config"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useConfigStore = defineStore('config', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const config = ref<ConfigMap>({})

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchConfigUseCase>(TYPES.FetchConfigUseCase)
      const data = await usecase.execute()
      config.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch config.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, config }
})
