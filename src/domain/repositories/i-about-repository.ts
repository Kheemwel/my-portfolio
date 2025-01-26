
import type { Certificate } from '../entities/certificate'
import type { Contact } from '../entities/contact'
import type { Education } from '../entities/education'
import type { InitialAbout } from '../entities/initial-about'
import type { Introduction } from '../entities/introduction'
import type { Resume } from '../entities/resume'
import type { Skills } from '../entities/skills'
import type { Work } from '../entities/work'

export interface AboutRepository {
  fetchIntroduction(): Promise<Introduction>
  fetchInitialAbout(): Promise<InitialAbout>
  fetchEducation(): Promise<Education>
  fetchWork(): Promise<Work[]>
  fetchCertificates(): Promise<Certificate[]>
  fetchSkills(): Promise<Skills>
  fetchContacts(): Promise<Contact>
  fetchResumes(): Promise<Resume>
}
