import { TYPES } from '@/composables/types'
import type { Skill, Skills } from '@/domain/entities/skills'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { inject, injectable } from 'inversify'

@injectable()
export class FetchSkillsUseCase {
  private aboutRepository: AboutRepository
  constructor(@inject(TYPES.AboutRepository) aboutRepository: AboutRepository) {
    this.aboutRepository = aboutRepository
  }

  async execute(): Promise<Skills> {
    const data = await this.aboutRepository.fetchSkills()
    const sortedTechnicalSkills: Skill[] = data.technical.sort((a, b) => {
      const typeOrder = ['language', 'framework', 'tool']
      const typeDiff = typeOrder.indexOf(a.type ?? '') - typeOrder.indexOf(b.type ?? '')
      if (typeDiff !== 0) {
        return typeDiff
      }
      return b.proficiency - a.proficiency
    })

    const sortedHardSkills: Skill[] = data.hard.sort((a, b) => b.proficiency - a.proficiency)

    const sortedSoftSkills = data.soft.sort((a, b) => b.proficiency - a.proficiency)

    return {
      technical: sortedTechnicalSkills,
      hard: sortedHardSkills,
      soft: sortedSoftSkills
    }
  }
}
