<script setup>
import { ref } from 'vue';
import NextButton from './widgets/NextButton.vue';
import PrevButton from './widgets/PrevButton.vue';

const props = defineProps({
    images: {
        type: Array,
        required: true
    }
})

const selectedIndex = ref(0);

function nextImage() {
    if (selectedIndex.value < (props.images.length - 1)) {
        selectedIndex.value++
    } else {
        selectedIndex.value = 0
    }
}

function prevImage() {
    if (selectedIndex.value > 0) {
        selectedIndex.value--
    } else {
        selectedIndex.value = props.images.length - 1
    }
}
</script>

<template>
    <div class="carousel">
        <div class="main">
            <PrevButton @click=prevImage />
            <div class="gallery">
                <img :src=images[selectedIndex]>
            </div>
            <NextButton @click=nextImage />
        </div>
        <div class="indicators">
            <div v-for="(img, index) in images" :key=img class="indicator"
                :class="{ 'selected': selectedIndex == index }" @click="selectedIndex = index"></div>
        </div>
    </div>
</template>

<style scoped>
.carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px;
}

.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px
}

.gallery {
    width: 700px;
    height: 350px;
    display: flex;
    justify-content: center;
}

.gallery>img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 100%;
}

.indicators {
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding: 0px 25px;
}

.indicator {
    width: 16px;
    height: 16px;
    border-radius: 90px;
    background-color: var(--color-primary);
    cursor: pointer;
    transition: width 0.5s;
}

.indicator:hover {
    width: 48px;
}

.indicator.selected {
    background-color: var(--color-neon);
    width: 48px;
}
</style>