<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import TabLayout from '@/components/layouts/TabLayout.vue'
import MenuButton from '@/components/widgets/MenuButton.vue'
import CloseButton from '@/components/widgets/CloseButton.vue'
import { computed, useSlots } from 'vue'
import { useProjectTitleListStore } from '@/stores/project-title-list-store'
import { storeToRefs } from 'pinia'

const props = defineProps({
  logo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  hasCollaborators: {
    type: Boolean,
    required: true
  }
})

const showSideTabs = ref(false)

const tabs = computed(() => {
  const slots = useSlots()
  var tab = ['Overview', 'Technical Details']
  if (slots['collaborators'] && props.hasCollaborators) {
    tab.push('Collaborators')
  }
  return tab
})

const projectTitleListStore = useProjectTitleListStore()
const { projectTitleList } = storeToRefs(projectTitleListStore)
</script>

<template>
  <div class="project-layout">
    <Transition>
      <div class="sidetab-container" v-show="showSideTabs">
        <CloseButton
          size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
          class="close"
          @click="showSideTabs = false"
        />
        <nav class="sidetabs">
          <RouterLink
            v-for="projectTitle in projectTitleList"
            :key="projectTitle"
            :to="{ name: 'project-detail', params: { title: projectTitle } }"
          >
            {{ projectTitle }}
          </RouterLink>
        </nav>
      </div>
    </Transition>
    <div class="side-background" @click="showSideTabs = false" v-show="showSideTabs"></div>
    <div class="project-content">
      <MenuButton
        size="clamp(32px, 27.4286px + 1.4286vw, 48px)"
        class="menu"
        @click="showSideTabs = true"
      />
      <div class="project-title">
        <img :src="logo" :alt="logo" />
        <h1>{{ title }}</h1>
      </div>
      <TabLayout :tabs="tabs">
        <template #0>
          <slot name="overview" />
        </template>
        <template #1>
          <slot name="technical" />
        </template>
        <template #2>
          <slot name="collaborators" />
        </template>
      </TabLayout>
    </div>
  </div>
</template>

<style scoped>
.project-layout {
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  padding: 5px;
  gap: 25px;
}

a {
  padding: 10px;
  font: var(--text-title);
  border-radius: 0px 10px 10px 0px;
  word-break: break-all;
}

a:hover {
  background-color: var(--color-highlight);
}

a.router-link-exact-active {
  background-color: var(--color-primary);
  font: var(--text-title-bold);
}

.menu {
  position: absolute;
  z-index: 98;
  top: 0;
  left: 0;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

.side-background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.sidetab-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: var(--color-background);
  display: flex;
  flex-direction: row;
  gap: 25px;
  width: 300px;
  height: 100%;
  overflow-y: hidden;
  border-right: 3px solid;
  border-image: var(--gradient-fade-neon-fade-vertical);
  border-image-slice: 1;
}

.sidetabs {
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow-y: auto;
  padding: 100px 25px 100px 0px;
  flex: 1;
  border-left: 2px solid;
  border-image: var(--gradient-fade-blue-fade-vertical);
  border-image-slice: 1;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
  width: 100%;
}

.project-title {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}

.project-title > img {
  width: clamp(48px, 34.2857px + 4.2857vw, 96px);
  height: clamp(48px, 34.2857px + 4.2857vw, 96px);
}

.project-title > h1 {
  font: var(--text-header-bold);
}

.v-enter-active {
  transition: all 0.3s ease;
}

.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
