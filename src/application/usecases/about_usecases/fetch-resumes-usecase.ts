import { TYPES } from '@/composables/types'
import type { Resume } from '@/domain/entities/resume'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchResumesUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Resume> {
    const data = await this.aboutRepository.fetchResumes()
    return data
  }
}
