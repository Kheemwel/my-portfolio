<script setup>
import { openLink } from '@/composables/utility';

defineProps({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
})

function openSocialLink(link) {
    if (link) {
        openLink(link)
    }
}
</script>

<template>
    <div class="collaborator" :class="{ 'hoverable': link }" @click=openSocialLink(link)>
        <img src="/images/icons/person.png" class="profile">
        <h1 class="name">{{ name }}</h1>
        <h2 class="role">{{ role }}</h2>
    </div>
</template>

<style scoped>
.collaborator {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 45px;
    background-color: var(--color-card);
    text-align: center;
    padding: 25px;
}

.hoverable {
    cursor: pointer;
}

.hoverable:hover {
    background-color: var(--color-highlight);
    outline: 2px solid var(--color-neon);
}

.profile {
    width: 128px;
    height: 128px;
}

.name {
    font: var(--text-subtitle);
}

.role {
    font: var(--text-label-bold);
}
</style>