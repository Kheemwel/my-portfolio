<template>
    <div class="button-download">
        <slot class="label" />
        <img src="/images/download.png">
    </div>
</template>

<style scoped>
.button-download {
    background-color: var(--color-secondary);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 10px;
    border-radius: 10px;
}

.button-download:hover {
    background-color: var(--color-primary);
    outline: 1px solid var(--color-neon);
}

.label {
    font: var(--text-subtitle-bold);
}
</style>