<script setup>
import CertificateCard from '@/components/CertificateCard.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
import SchoolDetail from '@/components/sub-components/SchoolDetail.vue';
import SkillCard from '@/components/SkillCard.vue';
import TabLayout from '@/components/layouts/TabLayout.vue';
import DownloadButton from '@/components/DownloadButton.vue';
import WorkExperienceDetail from '@/components/sub-components/WorkExperienceDetail.vue';
import { myCertificates } from '@/composables/certificates';
import { myEducationalBackground } from '@/composables/educational-background';
import { mySkills } from '@/composables/skills';
import { myWorkExperiences } from '@/composables/work-experiences';
import { myContacts } from '@/composables/contacts';
import { openLink } from '@/composables/utility';

const tabs = ['Summary', 'Educational Background', 'Work Experience', 'Certificates', 'Skills', 'Contacts', 'Resume']

const technicalSkills = mySkills.technical.sort((a, b) => {
    // Sort by type first
    const typeOrder = ['language', 'framework', 'tool'];
    const typeDiff = typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
    if (typeDiff !== 0) {
        return typeDiff;
    }

    // Sort by proficiency within each type
    return b.proficiency - a.proficiency;
});

const hardSkills = mySkills.hard.sort((a, b) => b.proficiency - a.proficiency)
const softSkills = mySkills.soft.sort((a, b) => b.proficiency - a.proficiency)

const appDevResume = 'docs/resume-app-dev.pdf'
const mobileDevResume = 'docs/resume-mobile-dev.pdf'
const webDevResume = 'docs/resume-web-dev.pdf'
</script>

<template>
    <div id="about">
        <img src="/images/myprofile.jpg" id="profile">
        <div id="content">
            <h1 id="name">Kimwel Lourence C. Beller</h1>
            <TabLayout :tabs=tabs>
                <template #0>
                    <div id="summary">
                        <p>I am an aspiring application developer dedicated to improving my skills in mobile and
                            web application development. I seek to collaborate on team projects, contributing my
                            knowledge while constantly learning and growing in the field of application development.</p>
                        <p>I am a BSIT graduate from STI College Dasmariñas. My programming journey began in 2018 when I
                            chose the ICT strand in grade 11. The first programming language I learned was Java, which
                            was once my
                            favorite. However, as I explored more programming languages, I grew to prefer Kotlin and
                            Dart. During my senior high and college years, I gained experience in mobile, desktop, and
                            web development, though I developed a particular liking for mobile development due to its
                            convenience and the ability to always carry apps on my phone. While I also have an interest
                            in game development, I prefer to pursue it as a hobby.</p>
                    </div>
                </template>
                <template #1>
                    <div id="education">
                        <SchoolDetail level="Tertiary" :schools=myEducationalBackground.tertiary />
                        <SchoolDetail level="Secondary" :schools=myEducationalBackground.secondary />
                    </div>
                </template>
                <template #2>
                    <div id="work-experiences">
                        <WorkExperienceDetail v-for="work in myWorkExperiences" :key=work.company :company=work.company
                            :type=work.type :job=work.job :date=work.date :location=work.location />
                    </div>
                </template>
                <template #3>
                    <div id="certificates">
                        <CertificateCard v-for="cert in myCertificates" :key=cert.title :title=cert.title
                            :date=cert.date :file=cert.file />
                    </div>
                </template>
                <template #4>
                    <div id="skills">
                        <div class="skill-set">
                            <h1>Technical Skills</h1>
                            <div class="skills-list">
                                <SkillCard v-for="skill in technicalSkills" :key=skill.name :logo=skill.logo
                                    :name=skill.name :proficiency=skill.proficiency />
                            </div>
                        </div>
                        <div class="skill-set">
                            <h1>Hard Skills</h1>
                            <div class="skills-list">
                                <SkillCard v-for="skill in hardSkills" :key=skill.name :logo=skill.logo :name=skill.name
                                    :proficiency=skill.proficiency />
                            </div>
                        </div>
                        <div class="skill-set">
                            <h1>Soft Skills</h1>
                            <div class="skills-list">
                                <SkillCard v-for="skill in softSkills" :key=skill.name :logo=skill.logo :name=skill.name
                                    :proficiency=skill.proficiency />
                            </div>
                        </div>
                    </div>
                </template>
                <template #5>
                    <div id="contacts">
                        <div class="contacts-section">
                            <h1>Social Links</h1>
                            <div id="social-links">
                                <LinkedinIcon size="48" @click=openLink(myContacts.linkedin) />
                                <GithubIcon size="48" @click=openLink(myContacts.github) />
                                <FacebookIcon size="48" @click=openLink(myContacts.facebook) />
                                <InstagramIcon size="48" @click=openLink(myContacts.instagram) />
                            </div>
                        </div>
                        <div class="contacts-section">
                            <h1>Email</h1>
                            <h2>{{ myContacts.email }}</h2>
                        </div>
                        <div class="contacts-section">
                            <h1>Contact Number</h1>
                            <h2>{{ myContacts.contactNo }}</h2>
                        </div>
                    </div>
                </template>
                <template #6>
                    <div id="resume">
                        <p>I am passionate about pursuing a career as an application developer, where I can apply and
                            further enhance my skills in both web and mobile development. However, I am also open to
                            roles that focus solely on web or mobile development. To give you flexibility in selecting a
                            position that best matches my abilities, I have provided three versions of my resume, each
                            tailored to different roles.</p>
                        <div id="resume-downloads">
                            <DownloadButton @click=openLink(appDevResume)>Application Developer Resume</DownloadButton>
                            <DownloadButton @click=openLink(mobileDevResume)>Mobile App Developer Resume
                            </DownloadButton>
                            <DownloadButton @click=openLink(webDevResume)>Web Developer Resume</DownloadButton>
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
    padding: 50px;
    gap: 25px;
    overflow: hidden;
}

#profile {
    width: 256px;
    height: 256px;
    border-radius: 180px;
    border-top: 2px solid var(--color-secondary);
    border-right: 5px solid var(--color-secondary);
    border-bottom: 5px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);
}

#name {
    font: var(--text-display);
    position: sticky;
    padding-top: 50px;
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
    display: flex;
    flex-direction: column;
    gap: 50px;
}

#summary>p {
    font: var(--text-subtitle);
    text-align: justify;
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
    padding: 0px 50px 5px 50px;
    gap: 50px;
    justify-content: center;
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

.skills-list {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
}

#contacts {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

#social-links {
    display: flex;
    flex-direction: row;
    gap: 25px;
}

.contacts-section {
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
}

.contacts-section>h1 {
    font: var(--text-subtitle-bold);
    width: 200px;
}

.contacts-section>h2 {
    font: var(--text-subtitle);
}

#resume {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

#resume>p {
    font: var(--text-subtitle);
    text-align: justify;
}

#resume-downloads {
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
    justify-content: center;
    padding-bottom: 5px;
}
</style>