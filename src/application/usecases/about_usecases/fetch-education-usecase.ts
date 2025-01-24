import { TYPES } from '@/composables/types'
import type { Education } from '@/domain/entities/education'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchEducationUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Education> {
    const data = await this.aboutRepository.fetchEducation()
    return data
  }
}
