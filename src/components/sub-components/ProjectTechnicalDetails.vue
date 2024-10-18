<script setup>
import { openLink } from '@/composables/utility';
import CodeIcon from '../icons/CodeIcon.vue';
import DesignIcon from '../icons/DesignIcon.vue';
import DownloadIcon from '../icons/DownloadIcon.vue';
import WebsiteIcon from '../icons/WebsiteIcon.vue';

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
                <CodeIcon v-if="codeLink" @click=openLink(codeLink) />
                <DesignIcon v-if="designLink" @click=openLink(designLink) />
                <WebsiteIcon v-if="siteLink" @click=openLink(siteLink) />
                <DownloadIcon v-if="downloadLink" @click=openLink(downloadLink) />
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
                <img v-for="lang in languages" :key=lang :src=lang>
            </div>
        </div>
        <div class="section" v-if="frameworks">
            <h1 class="label">Frameworks</h1>
            <div class="list">
                <img v-for="frame in frameworks" :key=frame :src=frame>
            </div>
        </div>
        <div class="section">
            <h1 class="label">Tools</h1>
            <div class="list">
                <img v-for="tool in tools" :key=tool :src=tool>
            </div>
        </div>
    </div>
</template>

<style scoped>
.technical {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-bottom: 50px;
}

.section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
}

.label {
    font: var(--text-subtitle-bold);
    width: 200px;
    flex-shrink: 0;
}

.text {
    font: var(--text-subtitle);
    flex-grow: 2;
}

.list {
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
    flex-grow: 2;
}

img {
    width: 48px;
    height: 48px;
    object-fit: contain;
}
</style>