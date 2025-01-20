import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIntroductionStore = defineStore('introduction', () => {
  const loading = ref(false)
  const error = ref(null)
  const greetings = ref('')
  const introduction = ref('')
  const linkedin = ref('')
  const github = ref('')
  const facebook = ref('')
  const instagram = ref('')

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchIntroductionUseCase)
      const data = await usecase.execute()
      greetings.value = data.greetings
      introduction.value = data.introduction
      linkedin.value = data.linkedin
      github.value = data.github
      facebook.value = data.facebook
      instagram.value = data.instagram
    } catch (err) {
      error.value = 'Failed to fetch introduction details.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return {
    loading,
    error,
    greetings,
    introduction,
    linkedin,
    github,
    facebook,
    instagram
  }
})
