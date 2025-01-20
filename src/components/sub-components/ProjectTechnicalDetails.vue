<script setup>
import { openLink } from '@/composables/utility'
import CodeIcon from '../icons/CodeIcon.vue'
import DesignIcon from '../icons/DesignIcon.vue'
import DownloadIcon from '../icons/DownloadIcon.vue'
import WebsiteIcon from '../icons/WebsiteIcon.vue'
import TooltipWidget from '../widgets/TooltipWidget.vue'

defineProps({
  codeLink: {
    type: String
  },
  designLink: {
    type: String
  },
  siteLink: {
    type: String
  },
  downloadLink: {
    type: String
  },
  role: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  languages: {
    type: Array,
    required: true
  },
  frameworks: {
    type: Array
  },
  tools: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="technical">
    <div class="section" v-if="codeLink || designLink || siteLink || downloadLink">
      <h1 class="label">Links</h1>
      <div class="list">
        <CodeIcon
          v-if="codeLink"
          @click="openLink(codeLink)"
          size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
        />
        <DesignIcon
          v-if="designLink"
          @click="openLink(designLink)"
          size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
        />
        <WebsiteIcon
          v-if="siteLink"
          @click="openLink(siteLink)"
          size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
        />
        <DownloadIcon
          v-if="downloadLink"
          @click="openLink(downloadLink)"
          size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
        />
      </div>
    </div>
    <div class="section">
      <h1 class="label">Role</h1>
      <div class="text">{{ role }}</div>
    </div>
    <div class="section">
      <h1 class="label">Date Created</h1>
      <div class="text">{{ date }}</div>
    </div>
    <div class="section">
      <h1 class="label">Programming Languages</h1>
      <div class="list">
        <template v-for="lang in languages" :key="lang.name">
          <TooltipWidget :tooltip="lang.name">
            <img :src="lang.logo_url" />
          </TooltipWidget>
        </template>
      </div>
    </div>
    <div class="section" v-if="frameworks && frameworks.length > 0">
      <h1 class="label">Frameworks</h1>
      <div class="list">
        <template v-for="frame in frameworks" :key="frame.name">
          <TooltipWidget :tooltip="frame.name">
            <img :src="frame.logo_url" />
          </TooltipWidget>
        </template>
      </div>
    </div>
    <div class="section">
      <h1 class="label">Tools</h1>
      <div class="list">
        <template v-for="tool in tools" :key="tool.name">
          <TooltipWidget :tooltip="tool.name">
            <img :src="tool.logo_url" />
          </TooltipWidget>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technical {
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: hidden;
  padding-bottom: 25px;
}

.section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
}

.label {
  font: var(--text-subtitle-bold);
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: clamp(100px, 71.4286px + 8.9286vw, 200px);
}

.text {
  font: var(--text-subtitle);
  flex-grow: 2;
}

.list {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px 25px;
  flex-grow: 2;
  padding: 5px;
}

img {
  width: clamp(32px, 27.4286px + 1.4286vw, 48px);
  height: clamp(32px, 27.4286px + 1.4286vw, 48px);
  object-fit: contain;
}
</style>
