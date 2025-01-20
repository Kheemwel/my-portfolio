import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInitialAboutStore = defineStore('initial-about', () => {
  const loading = ref(false)
  const error = ref(null)
  const name = ref('')
  const avatar_url = ref('')
  const summary = ref('')

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchInitialAboutUseCase)
      const data = await usecase.execute()
      name.value = data.name
      avatar_url.value = data.avatar_url
      summary.value = data.summary
    } catch (err) {
      error.value = 'Failed to fetch initial about details.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, name, avatar_url, summary }
})
