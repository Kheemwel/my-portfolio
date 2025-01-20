import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchEducationUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchEducation()

    const tertiaryLevel = data.filter((educ) => educ.level === 'tertiary')
    const secondaryLevel = data.filter((educ) => educ.level === 'secondary')

    return {
      tertiary: tertiaryLevel,
      secondary: secondaryLevel
    }
  }
}

injectable()(FetchEducationUseCase)
inject(TYPES.AboutRepository)(FetchEducationUseCase.prototype, 'aboutRepository')
