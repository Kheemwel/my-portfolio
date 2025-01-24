import { TYPES } from '@/composables/types'
import type { InitialAbout } from '@/domain/entities/initial-about'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchInitialAboutUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<InitialAbout> {
    const data = await this.aboutRepository.fetchInitialAbout()
    return data
  }
}
