import { supabase } from '../services/supabase-client'

export class AboutRepositoryImpl {
  async fetchIntroduction() {
    const { data, error } = await supabase
      .from('about')
      .select('greetings, introduction, linkedin, github, facebook, instagram')
      .limit(1)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchInitialAbout() {
    const { data, error } = await supabase
      .from('about')
      .select('name, avatar_url, summary')
      .limit(1)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchEducation() {
    const { data, error } = await supabase.from('education').select('*')

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchWork() {
    const { data, error } = await supabase
      .from('work')
      .select('*')
      .order('id', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchCertificates() {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('date', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchSkills() {
    const { data, error } = await supabase.from('skills').select('*')

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchContacts() {
    const { data, error } = await supabase
      .from('about')
      .select('email, contact_number, linkedin, github, facebook, instagram')
      .limit(1)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }

  async fetchResumes() {
    const { data, error } = await supabase
      .from('about')
      .select('resume_introduction, appdev_resume, mobiledev_resume, appdev_resume, webdev_resume')
      .limit(1)
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return data
  }
}
