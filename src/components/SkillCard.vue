<script setup>
import { onMounted, ref } from 'vue';
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

const rank = ref('Beginner');
const color = ref('var(--color-beginner)');

onMounted(() => {
    if (props.proficiency <= 40) {
        rank.value = 'Beginner';
        color.value = 'var(--color-beginner)';
    } else if (props.proficiency <= 70) {
        rank.value = 'Intermediate';
        color.value = 'var(--color-intermediate)';
    } else if (props.proficiency <= 90) {
        rank.value = 'Advanced';
        color.value = 'var(--color-advanced)';
    } else {
        rank.value = 'Expert';
        color.value = 'var(--color-expert)';
    }
});
</script>

<template>
    <div class="skill">
        <img :src="logo" alt="logo" class="logo" />
        <div class="skill-detail">
            <h1>{{ name }}</h1>
            <div class="rank">
                <h2 :style="{ color: color }">{{ rank }}</h2>
                <CircularProgressBar :size="48" :value=proficiency :indicatorColor=color />
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

.logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
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
