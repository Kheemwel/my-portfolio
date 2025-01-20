import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository
  }

  async execute() {
    const data = await this.projectRepository.fetchProjects()
    return data
  }
}

injectable()(FetchProjectsUseCase)
inject(TYPES.ProjectRepository)(FetchProjectsUseCase.prototype, 'projectRepository')
