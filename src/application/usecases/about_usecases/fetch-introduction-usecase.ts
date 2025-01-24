import { TYPES } from '@/composables/types'
import type { Introduction } from '@/domain/entities/introduction'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchIntroductionUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Introduction> {
    const data = await this.aboutRepository.fetchIntroduction()
    return data
  }
}
