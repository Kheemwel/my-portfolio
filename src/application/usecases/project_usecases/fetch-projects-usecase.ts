import { TYPES } from '@/composables/types'
import type { ProjectSummary } from '@/domain/entities/project-summary'
import type { ProjectRepository } from '@/domain/repositories/i-project-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchProjectsUseCase {
  private projectRepository: ProjectRepository
  constructor(@inject(TYPES.ProjectRepository) projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository
  }

  async execute(): Promise<ProjectSummary[]> {
    const data = await this.projectRepository.fetchProjects()
    return data
  }
}
