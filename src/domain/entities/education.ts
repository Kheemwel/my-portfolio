export interface Education {
  tertiary: School[]
  secondary: School[]
}

export interface School {
  year: string
  school: string
  course: string | null
  location: string
}
