import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchResumesUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchResumes()
    return data
  }
}

injectable()(FetchResumesUseCase)
inject(TYPES.AboutRepository)(FetchResumesUseCase.prototype, 'aboutRepository')
