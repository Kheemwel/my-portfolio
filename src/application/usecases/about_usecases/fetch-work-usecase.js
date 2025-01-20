import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchWorkUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchWork()
    return data
  }
}

injectable()(FetchWorkUseCase)
inject(TYPES.AboutRepository)(FetchWorkUseCase.prototype, 'aboutRepository')
