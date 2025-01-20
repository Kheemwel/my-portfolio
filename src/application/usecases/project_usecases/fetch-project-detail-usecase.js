import { TYPES } from '@/composables/types'
import { formatDate, parseJSONArray } from '@/composables/utility'
import { inject, injectable } from 'inversify'

export class FetchProjectDetailUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository
  }

  async execute(title) {
    const data = await this.projectRepository.fetchProjectDetail(title)
    return {
      title: data.title,
      tags: data.tags,
      logo: data.logo_url,
      images: data.preview_images,
      description: data.description,
      role: data.role,
      date: formatDate(data.created_at),
      codeLink: data.code_link,
      designLink: data.design_link,
      downloadLink: data.download_link,
      siteLink: data.website_link,
      languages: parseJSONArray(data.languages),
      frameworks: parseJSONArray(data.frameworks),
      tools: parseJSONArray(data.tools),
      collaborators: parseJSONArray(data.collaborators)
    }
  }
}

injectable()(FetchProjectDetailUseCase)
inject(TYPES.ProjectRepository)(FetchProjectDetailUseCase.prototype, 'projectRepository')
