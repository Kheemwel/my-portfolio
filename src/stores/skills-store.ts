import type { FetchSkillsUseCase } from '@/application/usecases/about_usecases/fetch-skills-usecase'
import { TYPES } from '@/composables/types'
import type { Skills } from '@/domain/entities/skills'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSkillsStore = defineStore('skills', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const skills = ref<Skills>()

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchSkillsUseCase>(TYPES.FetchSkillsUseCase)
      const data = await usecase.execute()
      skills.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch skills.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { loading, error, skills }
})
