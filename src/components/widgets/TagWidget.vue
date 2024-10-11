<template>
    <p>
        <slot />
    </p>
</template>

<style scoped>
p {
    font: var(--text-label);
    background-color: var(--color-secondary);
    padding: 5px 15px 5px 15px;
    border-radius: 90px;
}
</style>