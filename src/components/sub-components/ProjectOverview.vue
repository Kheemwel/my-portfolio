<script setup>
import ImageCarousel from '../ImageCarousel.vue';
import TagWidget from '../widgets/TagWidget.vue';

defineProps({
    tags: {
        type: Array,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="overview">
        <div class="section">
            <h1 class="label">Tags</h1>
            <div class="tags">
                <TagWidget v-for="item in tags" :key="item">{{ item }}</TagWidget>
            </div>
        </div>
        <div class="section">
            <h1 class="label">Preview</h1>
            <ImageCarousel :images=images />
        </div>
        <div class="section">
            <h1 class="label">Overview</h1>
            <h2 class="paragraph">{{ overview }}</h2>
        </div>
        <div class="section">
            <h1 class="label">Description</h1>
            <h2 class="paragraph">{{ description }}</h2>
        </div>
    </div>
</template>

<style scoped>
.overview {
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    gap: 50px;
}

.label {
    font: var(--text-title-bold);
}

.section {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.tags {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    padding: 5px 15px;
}

.paragraph {
    font: var(--text-subtitle);
}
</style>