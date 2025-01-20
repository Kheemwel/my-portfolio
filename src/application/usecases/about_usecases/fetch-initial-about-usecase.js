import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchInitialAboutUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchInitialAbout()
    return data
  }
}

injectable()(FetchInitialAboutUseCase)
inject(TYPES.AboutRepository)(FetchInitialAboutUseCase.prototype, 'aboutRepository')
