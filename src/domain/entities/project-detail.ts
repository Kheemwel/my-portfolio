import type { Collaborator } from './collaborator'
import type { Logo } from './logo'

export interface ProjectDetail {
  id: number
  created_at: string
  title: string
  tags: string[]
  is_highlight: boolean
  cover_url: string
  logo_url: string
  preview_images: string[]
  description: string
  code_link: string | null
  design_link: string | null
  download_link: string | null
  website_link: string | null
  role: string
  languages: Logo[]
  frameworks: Logo[] | null
  tools: Logo[]
  collaborators: Collaborator[] | null
}
