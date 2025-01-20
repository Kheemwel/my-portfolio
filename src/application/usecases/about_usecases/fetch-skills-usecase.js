import { TYPES } from '@/composables/types'
import { inject, injectable } from 'inversify'

export class FetchSkillsUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute() {
    const data = await this.aboutRepository.fetchSkills()

    const technicalSkills = data
      .filter((skill) => skill.category === 'technical')
      .sort((a, b) => {
        const typeOrder = ['language', 'framework', 'tool']
        const typeDiff = typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type)
        if (typeDiff !== 0) {
          return typeDiff
        }
        return b.proficiency - a.proficiency
      })

    const hardSkills = data
      .filter((skill) => skill.category === 'hard')
      .sort((a, b) => b.proficiency - a.proficiency)

    const softSkills = data
      .filter((skill) => skill.category === 'soft')
      .sort((a, b) => b.proficiency - a.proficiency)

    return {
      technical: technicalSkills,
      hard: hardSkills,
      soft: softSkills
    }
  }
}

injectable()(FetchSkillsUseCase)
inject(TYPES.AboutRepository)(FetchSkillsUseCase.prototype, 'aboutRepository')
