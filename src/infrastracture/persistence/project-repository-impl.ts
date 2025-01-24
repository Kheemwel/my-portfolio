import type { ProjectDetail } from '@/domain/entities/project-detail'
import type { ProjectSummary } from '@/domain/entities/project-summary'
import type { ProjectRepository } from '@/domain/repositories/i-project-repository'
import { supabase } from '../services/supabase-client'
import { parseJSONArray } from '@/composables/utility'
import type { Logo } from '@/domain/entities/logo'
import type { Collaborator } from '@/domain/entities/collaborator'

export class ProjectRepositoryImpl implements ProjectRepository {
  async fetchRecentProjects(count: number): Promise<ProjectSummary[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('title, tags, cover_url')
      .order('created_at', { ascending: false })
      .limit(count)

    if (error) {
      throw new Error(error.message)
    }

    return data as ProjectSummary[]
  }

  async fetchHighlightProjects(): Promise<ProjectSummary[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('title, tags, cover_url')
      .eq('is_highlight', true)
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data as ProjectSummary[]
  }

  async fetchProjects(): Promise<ProjectSummary[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('title, tags, cover_url')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data as ProjectSummary[]
  }

  async fetchProjectTitleList(): Promise<string[]> {
    const { data, error } = await supabase.from('projects').select('title').order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data.map((project) => project.title)
  }

  async fetchProjectDetail(title: string): Promise<ProjectDetail> {
    const { data, error } = await supabase.from('projects').select('*').eq('title', title).limit(1).single()

    if (error) {
      throw new Error(error.message)
    }

    return {
      id: data.id,
      created_at: data.created_at,
      title: data.title,
      tags: data.tags,
      is_highlight: data.is_highlight,
      cover_url: data.cover_url,
      logo_url: data.logo_url,
      preview_images: data.preview_images,
      description: data.description,
      code_link: data.code_link,
      design_link: data.design_link,
      download_link: data.download_link,
      website_link: data.website_link,
      role: data.role,
      languages: parseJSONArray<Logo>(data.languages),
      frameworks: parseJSONArray<Logo>(data.frameworks),
      tools: parseJSONArray<Logo>(data.tools),
      collaborators: parseJSONArray<Collaborator>(data.collaborators)
    }
  }
}
