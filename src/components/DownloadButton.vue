<template>
    <div class="button-download">
        <slot />
        <img src="/images/icons/download.png">
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
    cursor: pointer;
    font: var(--text-subtitle-bold);
}

img {
    width: clamp(16px, 11.4286px + 1.4286vw, 32px);
    height: clamp(16px, 11.4286px + 1.4286vw, 32px);
}

.button-download:hover {
    background-color: var(--color-primary);
    outline: 1px solid var(--color-neon);
}
</style>