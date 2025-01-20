import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSkillsStore = defineStore('skills', () => {
  const loading = ref(false)
  const error = ref(null)
  const skills = ref({})

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchSkillsUseCase)
      const data = await usecase.execute()
      skills.value = data
    } catch (err) {
      error.value = 'Failed to fetch skills.'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, skills }
})
