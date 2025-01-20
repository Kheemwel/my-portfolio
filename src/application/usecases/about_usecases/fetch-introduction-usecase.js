import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchIntroductionUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchIntroduction()
    return data
  }
}

injectable()(FetchIntroductionUseCase)
inject(TYPES.AboutRepository)(FetchIntroductionUseCase.prototype, 'aboutRepository')
