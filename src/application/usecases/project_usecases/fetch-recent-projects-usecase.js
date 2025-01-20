import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchRecentProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository
  }

  async execute(count) {
    const data = await this.projectRepository.fetchRecentProjects(count)
    return data
  }
}

injectable()(FetchRecentProjectsUseCase)
inject(TYPES.ProjectRepository)(FetchRecentProjectsUseCase.prototype, 'projectRepository')
