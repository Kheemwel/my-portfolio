<script setup>
import { RouterLink } from 'vue-router';
import TabLayout from '@/components/layouts/TabLayout.vue';
import { computed, useSlots } from 'vue';

defineProps({
    logo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

const tabs = computed(() => {
    const slots = useSlots()
    var tab = ['Overview', 'Technical Details']
    if (slots['collaborators']) {
        tab.push('Collaborators')
    }
    return tab
})
</script>

<template>
    <div class="project-layout">
        <div class="sidetab-container">
            <nav class="sidetabs">
                <RouterLink to="/projects/dtr-app">DTR App</RouterLink>
                <RouterLink to="/projects/aa-tv">AA TV</RouterLink>
                <RouterLink to="/projects/flagms">FLAGMS</RouterLink>
                <RouterLink to="/projects/imaginary-friends">Imaginary Friends</RouterLink>
                <RouterLink to="/projects/sciquiz">SciQuiz</RouterLink>
            </nav>
        </div>
        <div class="divider"></div>
        <div class="project-content">
            <div class="project-title">
                <img :src=logo :alt=logo>
                <h1>{{ title }}</h1>
            </div>
            <TabLayout :tabs=tabs>
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
    height: 100%;
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

.sidetab-container {
    display: flex;
    flex-direction: column;
    border-left: 2px solid;
    border-image: var(--gradient-fade-blue-fade-vertical);
    border-image-slice: 1;
    margin-top: 10px;
    overflow-y: auto;
    width: 300px;
    flex-shrink: 0;
}


.sidetabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0px;
    flex-grow: 1;
}


.divider {
    border-left: 3px solid;
    margin: 0px 25px;
    border-image: var(--gradient-fade-neon-fade-vertical);
    border-image-slice: 1;
}

.project-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 50px;
    flex-grow: 2;
}

.project-title {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
}

.project-title>img {
    width: 128px;
    height: 128px;
}

.project-title>h1 {
    font: var(--text-header-bold);
}
</style>