import { TYPES } from '@/composables/types'
import type { ProjectRepository } from '@/domain/repositories/i-project-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchProjectTitleListUseCase {
  private projectRepository: ProjectRepository
  constructor(@inject(TYPES.ProjectRepository) projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository
  }

  async execute(): Promise<string[]> {
    const data = await this.projectRepository.fetchProjectTitleList()
    return data
  }
}
