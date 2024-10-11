<script setup lang="ts">
import DiscordIcon from '@/components/icons/DiscordIcon.vue';
import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
import ProjectPreview from '@/components/ProjectPreview.vue';

import { myProjects } from '@/composables/project-list';

// Top 2 most recent projects
const recentProjects = [...myProjects]
  .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
  .slice(0, 2);

// Top 2 highlighted projects
const highlightProjects = myProjects
  .filter(project => project.isHighlight)
  .slice(0, 2);
</script>

<template>
  <div id="home">
    <div id="hero-section">
      <h1>Hi 👋, I'm Kim</h1>
      <p>I am a passionate application developer. For more information about me, just click here</p>
      <div id="social-links">
        <LinkedinIcon />
        <GithubIcon />
        <DiscordIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>

    <div class="project-previews">
      <h2>Recent Projects</h2>
      <div class="project-list">
        <ProjectPreview v-for="project in recentProjects" :key=project.title :title=project.title :image=project.image
          :tags=project.tags />
      </div>
    </div>

    <div class="project-previews">
      <h2>Project Highlights</h2>
      <div class="project-list">
        <ProjectPreview v-for="project in highlightProjects" :key=project.title :title=project.title
          :image=project.image :tags=project.tags />
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  padding: 200px 150px 50px 150px;
  gap: 250px;
  align-items: stretch;
}

#hero-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h1 {
  font: var(--text-display);
  border-bottom: 2px solid;
  border-image: var(--gradient-neon-blue-fading);
  border-image-slice: 1;
  width: 500px;
}

p {
  font: var(--text-subtitle);
}

#social-links {
  display: flex;
  gap: 25px;
}

.project-previews {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-list {
  display: flex;
  justify-content: space-around;
}
</style>
