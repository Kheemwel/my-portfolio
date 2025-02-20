import type { Contact } from '@/domain/entities/contact'
import type { Education, School } from '@/domain/entities/education'
import type { InitialAbout } from '@/domain/entities/initial-about'
import type { Introduction } from '@/domain/entities/introduction'
import type { Resume } from '@/domain/entities/resume'
import type { Skill, Skills } from '@/domain/entities/skills'
import type { Work } from '@/domain/entities/work'
import type { AboutRepository } from '@/domain/repositories/i-about-repository'
import { supabase } from '../services/supabase-client'
import type { Certificate } from '@/domain/entities/certificate'

export class AboutRepositoryImpl implements AboutRepository {
  async fetchIntroduction(): Promise<Introduction> {
    const { data, error } = await supabase
      .from('about_me')
      .select('key, value')
      .in('key', ['greetings', 'introduction', 'linkedin', 'github', 'facebook', 'instagram'])

    if (error) {
      throw new Error(error.message)
    }

    return data.reduce((acc: Introduction, { key, value }: { key: keyof Introduction; value: string }) => {
      acc[key] = value
      return acc
    }, { greetings: "", introduction: "", linkedin: "", github: "", facebook: "", instagram: "" })
  }

  async fetchInitialAbout(): Promise<InitialAbout> {
    const { data, error } = await supabase
      .from('about_me')
      .select('key, value')
      .in('key', ['name', 'avatar_url', 'summary'])

    if (error) {
      throw new Error(error.message)
    }

    return data.reduce((acc: InitialAbout, { key, value }: { key: keyof InitialAbout; value: string }) => {
      acc[key] = value
      return acc
    }, { name: "", avatar_url: "", summary: "" })
  }

  async fetchEducation(): Promise<Education> {
    const { data, error } = await supabase.from('education').select('*')

    if (error) {
      throw new Error(error.message)
    }

    const tertiaryLevel: School[] = data
      .filter((educ: { level: string }) => educ.level === 'tertiary')
      .map((educ: { year: string; school: string; course: string; location: string }) => ({
        year: educ.year,
        school: educ.school,
        course: educ.course,
        location: educ.location
      }))

    const secondaryLevel: School[] = data
      .filter((educ: { level: string }) => educ.level === 'secondary')
      .map((educ: { year: string; school: string; course: string; location: string }) => ({
        year: educ.year,
        school: educ.school,
        course: educ.course,
        location: educ.location
      }))

    return {
      tertiary: tertiaryLevel,
      secondary: secondaryLevel
    }
  }

  async fetchWork(): Promise<Work[]> {
    const { data, error } = await supabase.from('work').select('*').order('id', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data as Work[]
  }

  async fetchCertificates(): Promise<Certificate[]> {
    const { data, error } = await supabase.from('certificates').select('*').order('date', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return data as Certificate[]
  }

  async fetchSkills(): Promise<Skills> {
    const { data, error } = await supabase.from('skills').select('*')

    if (error) {
      throw new Error(error.message)
    }

    const technicalSkills: Skill[] = data
      .filter((skill) => skill.category === 'technical')
      .map((skill) => ({
        id: skill.id,
        category: skill.category,
        type: skill.type,
        name: skill.name,
        proficiency: skill.proficiency,
        logo_url: skill.logo_url
      }))

    const hardSkills: Skill[] = data
      .filter((skill) => skill.category === 'hard')
      .map((skill) => ({
        id: skill.id,
        category: skill.category,
        type: skill.type,
        name: skill.name,
        proficiency: skill.proficiency,
        logo_url: skill.logo_url
      }))

    const softSkills = data
      .filter((skill) => skill.category === 'soft')
      .map((skill) => ({
        id: skill.id,
        category: skill.category,
        type: skill.type,
        name: skill.name,
        proficiency: skill.proficiency,
        logo_url: skill.logo_url
      }))

    return {
      technical: technicalSkills,
      hard: hardSkills,
      soft: softSkills
    }
  }

  async fetchContacts(): Promise<Contact> {
    const { data, error } = await supabase
      .from('about_me')
      .select('key, value')
      .in('key', ['email', 'contact_number', 'linkedin', 'github', 'facebook', 'instagram'])

    if (error) {
      throw new Error(error.message)
    }

    return data.reduce((acc: Contact, { key, value }: { key: keyof Contact; value: string }) => {
      acc[key] = value
      return acc
    }, { email: "", contact_number: "", linkedin: "", github: "", facebook: "", instagram: "" })
  }

  async fetchResumes(): Promise<Resume> {
    const { data, error } = await supabase
      .from('about_me')
      .select('key, value')
      .in('key', ['resume_introduction', 'appdev_resume', 'mobiledev_resume', 'webdev_resume'])

    if (error) {
      throw new Error(error.message)
    }

    return data.reduce((acc: Resume, { key, value }: { key: keyof Resume; value: string }) => {
      acc[key] = value
      return acc
    }, { resume_introduction: "", appdev_resume: "", mobiledev_resume: "", webdev_resume: "" })
  }
}
