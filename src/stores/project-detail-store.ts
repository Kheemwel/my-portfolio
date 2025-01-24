import type { FetchProjectDetailUseCase } from '@/application/usecases/project_usecases/fetch-project-detail-usecase'
import { TYPES } from '@/composables/types'
import type { ProjectDetail } from '@/domain/entities/project-detail'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectDetailStore = defineStore('project-detail', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const projectDetail = ref<ProjectDetail>({
    id: 0,
    created_at: '',
    title: '',
    tags: [],
    is_highlight: false,
    cover_url: '',
    logo_url: '',
    preview_images: [],
    description: '',
    code_link: null,
    design_link: null,
    download_link: null,
    website_link: null,
    role: '',
    languages: [],
    frameworks: null,
    tools: [],
    collaborators: null
  })

  async function fetchProjectDetail(title: string) {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchProjectDetailUseCase>(TYPES.FetchProjectDetailUseCase)
      const data = await usecase.execute(title)
      projectDetail.value = data
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch project detail.'
      }
    } finally {
      loading.value = false
    }
  }

  return { loading, error, projectDetail, fetchProjectDetail }
})
