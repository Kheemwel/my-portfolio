<script setup>
import { ref } from 'vue';
import TabWidget from '@/components/widgets/TabWidget.vue';

const emit = defineEmits(['onSelected'])

defineProps({
    items: {
        type: Array,
        required: true
    }
})

const selectedIndex = ref(0)

function selectIndex(index) {
    selectedIndex.value = index
    emit('onSelected', index)
}
</script>

<template>
    <div class="tab-row">
        <div class="tabs">
            <TabWidget v-for="item in items" :key=item :isSelected="selectedIndex == items.indexOf(item)"
                @click=selectIndex(items.indexOf(item))>
                {{ item }}
            </TabWidget>
        </div>
    </div>
</template>

<style scoped>
.tab-row {
    border-bottom: 2px solid;
    border-image: var(--gradient-blue-fade-horizontal);
    border-image-slice: 1;
    display: flex;
    overflow-x: auto;
}

.tabs {
    display: flex;
    padding-right: 200px;
}

.tab-row::-webkit-scrollbar {
    height: 5px;
}
</style>