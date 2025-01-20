import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchCertificatesUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchCertificates()
    return data
  }
}

injectable()(FetchCertificatesUseCase)
inject(TYPES.AboutRepository)(FetchCertificatesUseCase.prototype, 'aboutRepository')
