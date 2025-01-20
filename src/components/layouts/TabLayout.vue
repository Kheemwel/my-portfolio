<script setup>
import { ref } from 'vue';
import TabRow from '@/components/sub-components/TabRow.vue';

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
        <div>
            <TabRow :items=tabs @onSelected=onSelected />
        </div>
        <template v-for="tab in tabs" :key="tab">
            <div v-if="selectedIndex == tabs.indexOf(tab)" class="content">
                <slot :name=tabs.indexOf(tab) />
            </div>
        </template>
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
    padding-top: 25px;
    padding-right: 5px;
}
</style>