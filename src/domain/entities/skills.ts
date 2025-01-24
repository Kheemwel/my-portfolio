export interface Skills {
  technical: Skill[]
  hard: Skill[]
  soft: Skill[]
}

export interface Skill {
  id: number
  category: string
  type: string | null
  name: string
  proficiency: number
  logo_url: string
}
