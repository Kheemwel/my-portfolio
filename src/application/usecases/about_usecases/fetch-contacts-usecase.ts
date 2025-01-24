import { TYPES } from '@/composables/types'
import type { Contact } from '@/domain/entities/contact'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchContactsUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Contact> {
    const data = await this.aboutRepository.fetchContacts()
    return data
  }
}
