import type { FetchResumesUseCase } from '@/application/usecases/about_usecases/fetch-resumes-usecase'
import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResumeStore = defineStore('resume', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const introduction = ref('')
  const appDevResume = ref('')
  const mobileDevResume = ref('')
  const webDevResume = ref('')

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchResumesUseCase>(TYPES.FetchResumesUseCase)
      const data = await usecase.execute()
      introduction.value = data.resume_introduction
      appDevResume.value = data.appdev_resume
      mobileDevResume.value = data.mobiledev_resume
      webDevResume.value = data.webdev_resume
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch resumes.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return {
    loading,
    error,
    introduction,
    appDevResume,
    mobileDevResume,
    webDevResume
  }
})
