import { TYPES } from '@/composables/types'
import type { Work } from '@/domain/entities/work'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchWorkUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Work[]> {
    const data = await this.aboutRepository.fetchWork()
    return data
  }
}
