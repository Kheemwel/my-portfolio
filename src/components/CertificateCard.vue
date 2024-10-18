<script setup>
import { openLink } from '@/composables/utility';

defineProps({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
})

</script>

<template>
    <div class="certificate" @click=openLink(file)>
        <img src="/images/icons/trophy.png">
        <h1>{{ title }}</h1>
        <h2>{{ date }}</h2>
    </div>
</template>

<style scoped>
.certificate {
    background-color: var(--color-card);
    padding: 25px;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 250px;
    height: 250px;
}

.certificate:hover {
    background-color: var(--color-highlight);
    outline: 2px solid var(--color-neon);
}

img {
    width: 128px;
    height: 128px;
}

h1 {
    font: var(--text-subtitle);
}

h2 {
    font: var(--text-label-bold);
}
</style>