import { TYPES } from '@/composables/types'
import type { Certificate } from '@/domain/entities/certificate-dto'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchCertificatesUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Certificate[]> {
    const data = await this.aboutRepository.fetchCertificates()
    return data
  }
}
