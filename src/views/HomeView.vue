<script setup lang="ts">
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import ProjectPreview from '@/components/ProjectPreview.vue'
import { openLink } from '@/composables/utility'
import { useHighlightProjectStore } from '@/stores/highlight-projects-store'
import { useIntroductionStore } from '@/stores/introduction-store'
import { useRecentProjectsStore } from '@/stores/recent-projects-store'

const introductionStore = useIntroductionStore()
const recentProjectsStore = useRecentProjectsStore()
const highlightProjectsStore = useHighlightProjectStore()
</script>

<template>
  <div id="home">
    <div id="hero-section">
      <h1>{{ introductionStore.greetings }}</h1>
      <p>{{ introductionStore.introduction }}</p>
      <div id="socials">
        <LinkedinIcon
          v-if="introductionStore.linkedin"
          size="clamp(32px, 22.8571px + 2.8571vw, 64px)"
          @click="openLink(introductionStore.linkedin)"
        />
        <GithubIcon
          v-if="introductionStore.github"
          size="clamp(32px, 22.8571px + 2.8571vw, 64px)"
          @click="openLink(introductionStore.github)"
        />
        <FacebookIcon
          v-if="introductionStore.facebook"
          size="clamp(32px, 22.8571px + 2.8571vw, 64px)"
          @click="openLink(introductionStore.facebook)"
        />
        <InstagramIcon
          v-if="introductionStore.instagram"
          size="clamp(32px, 22.8571px + 2.8571vw, 64px)"
          @click="openLink(introductionStore.instagram)"
        />
      </div>
    </div>

    <div class="project-previews">
      <h2>Recent Projects</h2>
      <div class="project-list">
        <ProjectPreview
          v-for="project in recentProjectsStore.recentProjects"
          :key="project.title"
          :title="project.title"
          :image="project.cover_url"
          :tags="project.tags"
          :link="`/projects/${project.title}`"
        />
      </div>
    </div>

    <div class="project-previews">
      <h2>Project Highlights</h2>
      <div class="project-list">
        <ProjectPreview
          v-for="project in highlightProjectsStore.highlightProjects"
          :key="project.title"
          :title="project.title"
          :image="project.cover_url"
          :tags="project.tags"
          :link="`/projects/${project.title}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
}

#hero-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h1 {
  font: var(--text-display);
  border-bottom: 2px solid;
  border-image: var(--gradient-neon-blue-fade-horizontal);
  border-image-slice: 1;
}

h2 {
  font: var(--header-bold);
}

p {
  font: var(--text-subtitle);
}

#socials {
  display: flex;
  flex-flow: row wrap;
  gap: 25px;
}

.project-previews {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-list {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 10px;
}

.project-list > * {
  flex: 0 0 auto;
  scroll-snap-align: start;
}

@media (min-width: 320px) {
  #home {
    padding: 50px 25px 10px 25px;
    gap: 50px;
  }

  .project-list {
    gap: 25px;
  }
}

@media (min-width: 768px) {
  #home {
    padding: 75px 50px 20px 50px;
    gap: 100px;
  }

  .project-list {
    gap: 50px;
  }
}

@media (min-width: 1024px) {
  #home {
    padding: 100px 100px 30px 100px;
    gap: 150px;
  }

  .project-list {
    gap: 75px;
  }
}

@media (min-width: 1440px) {
  #home {
    padding: 150px 150px 50px 150px;
    gap: 200px;
  }

  .project-list {
    gap: 100px;
  }
}
</style>
