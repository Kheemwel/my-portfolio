<script setup>
import TagWidget from './widgets/TagWidget.vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div id="project">
        <img :src=image>
        <h1>{{ title }}</h1>
        <div id="tag-list">
            <TagWidget v-for="item in tags" :key="item">{{ item }}</TagWidget>
        </div>
    </div>
</template>

<style scoped>
#project {
    width: 450px;
    height: 350px;
    border-radius: 10px;
    background-color: var(--color-card);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    align-items: center;
}

#project:hover {
    background-color: var(--color-highlight);
    outline: 2px solid var(--color-neon);
}

img {
    width: 100%;
    height: 250px;
    border-radius: 10px 10px 0 0;
}

h1 {
    font: var(--text-title);
}

#tag-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    overflow-y: auto;
    padding: 5px 15px 5px 15px;
}
</style>