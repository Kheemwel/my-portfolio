import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchProjectTitleListUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository
  }

  async execute(title) {
    const data = await this.projectRepository.fetchProjectTitleList(title)
    return data.map((project) => project.title)
  }
}

injectable()(FetchProjectTitleListUseCase)
inject(TYPES.ProjectRepository)(FetchProjectTitleListUseCase.prototype, 'projectRepository')
