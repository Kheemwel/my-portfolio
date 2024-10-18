<script setup>
import CircularProgressBar from './widgets/CircularProgressBar.vue';

const props = defineProps({
    logo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: Number,
        required: true
    }
})

const rank = props.proficiency <= 40
    ? "Beginner"
    : props.proficiency <= 70
        ? "Intermediate"
        : props.proficiency <= 90
            ? "Advanced"
            : "Expert"
</script>

<template>
    <div class="skill">
        <div class="skill-logo">
            <img :src="logo" alt="logo" />
        </div>
        <div class="skill-detail">
            <h1>{{ name }}</h1>
            <div class="rank">
                <h2>{{ rank }}</h2>
                <CircularProgressBar :size="48" :value=proficiency />
            </div>
        </div>
    </div>
</template>

<style scoped>
.skill {
    background-color: var(--color-card);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding: 15px;
    align-items: center;
}

.skill-logo {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
}

.skill-logo>img {
    max-width: 100%;
    max-height: 100%;
}

.skill-detail {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.skill-detail>h1 {
    font: var(--text-title);
}

.rank {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    word-break: break-all;
}

.rank>h2 {
    font: var(--text-label-bold);
    color: var(--color-primary);
}

.rank>h3 {
    font: var(--text-mini);
}
</style>
