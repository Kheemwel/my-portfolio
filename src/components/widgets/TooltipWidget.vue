<script setup>
defineProps({
    tooltip: {
        type: String
    }
})
</script>

<template>
    <div class="tooltip">
        <slot />
        <span class="tooltiptext" v-if="tooltip">{{ tooltip }}</span>
    </div>
</template>

<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--color-card);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 9;
    top: 100%;
    left: 50%;
    margin-left: -60px;
    font: var(--text-mini);
    word-wrap: break-word;
}

.tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent var(--color-card);
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>