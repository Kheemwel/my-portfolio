<script setup>
import { ref } from 'vue';
import TabRow from './TabRow.vue';

defineProps({
    tabs: {
        type: Array,
        required: true
    }
})

const selectedIndex = ref(0)

function onSelected(index) {
    selectedIndex.value = index
}
</script>

<template>
    <div class="tab-layout">
        <div class="tabs">
            <TabRow :items=tabs @onSelected=onSelected />
        </div>
        <div v-for="tab in tabs" :key="tab" class="content">
            <slot :name=tabs.indexOf(tab) v-if="selectedIndex == tabs.indexOf(tab)" />
        </div>
    </div>
</template>

<style scoped>
.tab-layout {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.content {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
</style>