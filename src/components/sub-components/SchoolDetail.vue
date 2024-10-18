<script setup>
defineProps({
    level: {
        type: String,
        required: true
    },
    schools: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="education-level">
        <h1>{{ level }}</h1>
        <div class="school-years">
            <div v-for="educ in schools" :key=educ.year class="school">
                <h1>{{ educ.year }}</h1>
                <h2>{{ educ.school }}</h2>
                <h3 v-if="educ.course">{{ educ.course }}</h3>
                <h4>{{ educ.location }}</h4>
            </div>
        </div>
    </div>
</template>

<style scoped>
.education-level {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.education-level>h1 {
    font: var(--text-title-bold);
}

.school-years {
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.school {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.school>h1 {
    font: var(--text-subtitle-bold);
}

.school>h2 {
    font: var(--text-subtitle);
}

.school>h3 {
    font: var(--text-subtitle);
    color: var(--color-primary);
}

.school>h4 {
    font: var(--text-description);
}
</style>