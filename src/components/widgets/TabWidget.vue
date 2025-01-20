<script setup>
defineProps({
    isSelected: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <p :class="isSelected ? 'tab-selected' : 'tab'">
        <slot />
    </p>
</template>

<style scoped>
.tab {
    font: var(--text-title);
    padding: 10px 20px;
    border-radius: 10px 10px 0 0;
    white-space: nowrap;
    cursor: pointer;
}

.tab:hover {
    background-color: var(--color-highlight);
}

.tab-selected {
    font: var(--text-title-bold);
    background-color: var(--color-primary);
    padding: 10px 20px;
    border-radius: 10px 10px 0 0;
    white-space: nowrap;
}
</style>