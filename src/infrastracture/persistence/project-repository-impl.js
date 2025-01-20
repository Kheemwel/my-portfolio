import { supabase } from '../services/supabase-client'

export class ProjectRepositoryImpl {
  async fetchRecentProjects(count) {
    const { data, error } = await supabase
      .from('projects')
      .select('title, tags, cover_url')
      .order('created_at', { ascending: false })
      .limit(count)

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchHighlightProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('title, tags, cover_url')
      .eq('is_highlight', true)
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('title, tags, cover_url')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchProjectTitleList() {
    const { data, error } = await supabase
      .from('projects')
      .select('title')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchProjectDetail(title) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('title', title)
      .limit(1)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }
}
