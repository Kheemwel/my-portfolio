import { TYPES } from '@/composables/types'
import type { ProjectDetail } from '@/domain/entities/project-detail'
import type { ProjectRepository } from '@/domain/repositories/i-project-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchProjectDetailUseCase {
  private projectRepository: ProjectRepository
  constructor(@inject(TYPES.ProjectRepository) projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository
  }

  async execute(title: string): Promise<ProjectDetail> {
    const data = await this.projectRepository.fetchProjectDetail(title)
    return data
  }
}
