import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectDetailStore = defineStore('project-detail', () => {
  const loading = ref(false)
  const error = ref(null)
  const projectDetail = ref({
    title: '',
    tags: [],
    logo: '',
    images: [],
    description: '',
    date: '',
    role: '',
    codeLink: '',
    designLink: '',
    downloadLink: '',
    siteLink: '',
    languages: [],
    frameworks: [],
    tools: [],
    collaborators: []
  })

  async function fetchProjectDetail(title) {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchProjectDetailUseCase)
      const data = await usecase.execute(title)
      projectDetail.value = data
    } catch (err) {
      error.value = 'Failed to fetch project detail.'
    } finally {
      loading.value = false
    }
  }

  return { loading, error, projectDetail, fetchProjectDetail }
})
