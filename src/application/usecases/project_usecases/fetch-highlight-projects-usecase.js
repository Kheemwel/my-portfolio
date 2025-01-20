import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchHighlightProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository
  }

  async execute() {
    const data = await this.projectRepository.fetchHighlightProjects()
    return data
  }
}

injectable()(FetchHighlightProjectsUseCase)
inject(TYPES.ProjectRepository)(FetchHighlightProjectsUseCase.prototype, 'projectRepository')
