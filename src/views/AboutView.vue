<script setup lang="ts">
import CertificateCard from '@/components/CertificateCard.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import SchoolDetail from '@/components/sub-components/SchoolDetail.vue'
import SkillCard from '@/components/SkillCard.vue'
import TabLayout from '@/components/layouts/TabLayout.vue'
import DownloadButton from '@/components/DownloadButton.vue'
import WorkExperienceDetail from '@/components/sub-components/WorkExperienceDetail.vue'
import { formatDate, openLink } from '@/composables/utility'
import { useInitialAboutStore } from '@/stores/intial-about-store'
import { useEducationStore } from '@/stores/education-store'
import { useWorkStore } from '@/stores/work-store'
import { useCertificatesStore } from '@/stores/certificates-store'
import { useSkillsStore } from '@/stores/skills-store'
import { useContactsStore } from '@/stores/contacts-store'
import { useResumeStore } from '@/stores/resumes-store'
import { useConfigStore } from '@/stores/config-store'
import { ref, watch } from 'vue'
import { getConfigValue } from '@/composables/config'

const tabs = ['Summary', 'Educational Background', 'Work Experience', 'Certificates', 'Skills', 'Contacts', 'Resume']

const initialAboutStore = useInitialAboutStore()
const educationStore = useEducationStore()
const workStore = useWorkStore()
const certificatesStore = useCertificatesStore()
const skillsStore = useSkillsStore()
const contactsStore = useContactsStore()
const resumeStore = useResumeStore()
const configStore = useConfigStore()

const showMoreResumes = ref(false)

watch(
  () => configStore.config,
  (newConfig) => showMoreResumes.value = getConfigValue(newConfig, 'show_more_resumes', false),
  { immediate: true }
)
</script>

<template>
  <v-skeleton-loader
    type="avatar, heading, table-thead, paragraph, paragraph"
    v-if="initialAboutStore.loading"
    theme="dark"
  />
  <div id="about" v-else>
    <img :src="initialAboutStore.avatar_url" id="profile" />
    <div id="content">
      <h1 id="name">{{ initialAboutStore.name }}</h1>
      <TabLayout :tabs="tabs">
        <template #0>
          <div id="summary">{{ initialAboutStore.summary }}</div>
        </template>
        <template #1>
          <v-skeleton-loader
            type="subtitle, list-item-three-line, subtitle, list-item-three-line"
            v-if="educationStore.loading"
            theme="dark"
          />
          <div id="education" v-else>
            <SchoolDetail
              v-if="educationStore.education"
              level="Tertiary"
              :schools="educationStore.education.tertiary"
            />
            <SchoolDetail
              v-if="educationStore.education"
              level="Secondary"
              :schools="educationStore.education.secondary"
            />
          </div>
        </template>
        <template #2>
          <v-skeleton-loader
            type="subtitle, list-item-three-line, subtitle, list-item-three-line"
            v-if="workStore.loading"
            theme="dark"
          />
          <div id="work-experiences" v-else>
            <WorkExperienceDetail
              v-for="work in workStore.work"
              :key="work.company"
              :company="work.company"
              :type="work.type"
              :job="work.job"
              :date="work.date"
              :location="work.location"
            />
          </div>
        </template>
        <template #3>
          <v-container v-if="certificatesStore.loading">
            <v-row class="d-flex flex-wrap justify-center">
              <v-col v-for="n in 4" :key="n" cols="12" sm="6" md="4" lg="3">
                <v-skeleton-loader type="image" theme="dark" />
              </v-col>
            </v-row>
          </v-container>
          <div id="certificates" v-else>
            <CertificateCard
              v-for="cert in certificatesStore.certificates"
              :key="cert.title"
              :title="cert.title"
              :date="formatDate(cert.date)"
              :file="cert.file_url"
            />
          </div>
        </template>
        <template #4>
          <v-container v-if="skillsStore.loading">
            <v-skeleton-loader type="subtitle" theme="dark" />
            <v-row class="d-flex flex-wrap justify-center">
              <v-col v-for="n in 8" :key="n" cols="12" sm="4" md="4" lg="3">
                <v-skeleton-loader type="image" theme="dark" />
              </v-col>
            </v-row>
          </v-container>
          <div id="skills" v-else>
            <div class="skill-set">
              <h1>Technical Skills</h1>
              <div class="skills-list">
                <SkillCard
                  v-for="skill in skillsStore.skills?.technical"
                  :key="skill.name"
                  :logo="skill.logo_url"
                  :name="skill.name"
                  :proficiency="skill.proficiency"
                />
              </div>
            </div>
            <div class="skill-set">
              <h1>Hard Skills</h1>
              <div class="skills-list">
                <SkillCard
                  v-for="skill in skillsStore.skills?.hard"
                  :key="skill.name"
                  :logo="skill.logo_url"
                  :name="skill.name"
                  :proficiency="skill.proficiency"
                />
              </div>
            </div>
            <div class="skill-set">
              <h1>Soft Skills</h1>
              <div class="skills-list">
                <SkillCard
                  v-for="skill in skillsStore.skills?.soft"
                  :key="skill.name"
                  :logo="skill.logo_url"
                  :name="skill.name"
                  :proficiency="skill.proficiency"
                />
              </div>
            </div>
          </div>
        </template>
        <template #5>
          <v-skeleton-loader type="paragraph" theme="dark" v-if="contactsStore.loading" />
          <div id="contacts" v-else>
            <div class="contacts-section">
              <h1>Social Links</h1>
              <div id="social-links">
                <LinkedinIcon
                  v-if="contactsStore.linkedin"
                  size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
                  @click="openLink(contactsStore.linkedin)"
                />
                <GithubIcon
                  v-if="contactsStore.github"
                  size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
                  @click="openLink(contactsStore.github)"
                />
                <FacebookIcon
                  v-if="contactsStore.facebook"
                  size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
                  @click="openLink(contactsStore.facebook)"
                />
                <InstagramIcon
                  v-if="contactsStore.instagram"
                  size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
                  @click="openLink(contactsStore.instagram)"
                />
              </div>
            </div>
            <div class="contacts-section">
              <h1>Email</h1>
              <h2>{{ contactsStore.email }}</h2>
            </div>
            <div class="contacts-section">
              <h1>Contact Number</h1>
              <h2>{{ contactsStore.contactNumber }}</h2>
            </div>
          </div>
        </template>
        <template #6>
          <v-skeleton-loader type="paragraph, chip, chip, chip" theme="dark" v-if="resumeStore.loading" />
          <div id="resume" v-else>
            <pre id="resume-introduction" v-if="showMoreResumes"> {{ resumeStore.introduction }}</pre>
            <div id="resume-downloads">
              <DownloadButton @click="openLink(resumeStore.appDevResume)">Software Developer Resume</DownloadButton>
              <DownloadButton @click="openLink(resumeStore.mobileDevResume)" v-if="showMoreResumes"
                >Mobile App Developer Resume
              </DownloadButton>
              <DownloadButton @click="openLink(resumeStore.webDevResume)" v-if="showMoreResumes">Web Developer Resume</DownloadButton>
            </div>
          </div>
        </template>
      </TabLayout>
    </div>
  </div>
</template>

<style scoped>
#about {
  display: flex;
  overflow: hidden;
}

#profile {
  width: clamp(128px, 91.4286px + 11.4286vw, 256px);
  height: clamp(128px, 91.4286px + 11.4286vw, 256px);
  border-radius: 180px;
  border-top: 2px solid var(--color-secondary);
  border-right: 5px solid var(--color-secondary);
  border-bottom: 5px solid var(--color-secondary);
  border-left: 2px solid var(--color-secondary);
}

#name {
  font: var(--text-display);
  position: sticky;
  top: 0px;
  background-color: var(--color-background);
}

#content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: hidden;
}

#summary {
  font: var(--text-subtitle);
  text-align: justify;
  white-space: pre-line;
}

#education {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

#work-experiences {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

#certificates {
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
  justify-content: center;
  padding-bottom: 25px;
}

#skills {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.skill-set {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-set > h1 {
  font: var(--text-title-bold);
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, clamp(180px, 140px + 12.5vw, 320px));
  justify-content: center;
  gap: 10px;
}

#contacts {
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: hidden;
}

#social-links {
  display: flex;
  flex-flow: row wrap;
  gap: 10px 25px;
  padding: 5px;
}

.contacts-section {
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
}

.contacts-section > h1 {
  font: var(--text-subtitle-bold);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: clamp(100px, 71.4286px + 8.9286vw, 200px);
}

.contacts-section > h2 {
  font: var(--text-subtitle);
  word-break: break-all;
}

#resume {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

#resume-introduction {
  font: var(--text-subtitle);
  text-align: justify;
  white-space: pre-line;
}

#resume-downloads {
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
  justify-content: center;
  padding-bottom: 5px;
}

@media (min-width: 320px) {
  #about {
    flex-direction: column;
    padding: 15px;
    gap: 15px;
  }

  #name {
    padding-top: 10px;
  }

  #profile {
    align-self: center;
  }
}

@media (min-width: 768px) {
  #about {
    flex-direction: row;
    padding: 25px;
    gap: 25px;
  }

  #name {
    padding-top: 25px;
  }

  #profile {
    align-self: start;
  }
}

@media (min-width: 1024px) {
  #about {
    flex-direction: row;
    padding: 50px;
    gap: 25px;
  }

  #name {
    padding-top: 50px;
  }
}
</style>
