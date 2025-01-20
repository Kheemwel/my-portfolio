import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchContactsUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchContacts()
    return data
  }
}

injectable()(FetchContactsUseCase)
inject(TYPES.AboutRepository)(FetchContactsUseCase.prototype, 'aboutRepository')
