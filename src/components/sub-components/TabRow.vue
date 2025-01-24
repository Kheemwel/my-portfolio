<script setup lang="ts">
import { ref, type PropType } from 'vue'
import TabWidget from '@/components/widgets/TabWidget.vue'

const emit = defineEmits(['onSelected'])

defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const selectedIndex = ref(0)
const tabRef = ref<HTMLElement | null>(null)

function selectIndex(index: number) {
  selectedIndex.value = index
  emit('onSelected', index)
}

function horizontalScroll(event: WheelEvent) {
  if (tabRef.value) {
    tabRef.value.scrollLeft += event.deltaY
  }
}
</script>

<template>
  <div class="tab-row" ref="tabRef" @wheel="horizontalScroll">
    <div class="tabs">
      <TabWidget
        v-for="item in items"
        :key="item"
        :isSelected="selectedIndex == items.indexOf(item)"
        @click="selectIndex(items.indexOf(item))"
      >
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
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.tabs {
  display: flex;
  padding-right: 200px;
}

.tabs > * {
  scroll-snap-align: start;
}

.tab-row::-webkit-scrollbar {
  height: 5px;
  display: none;
}

.tab-row:hover::-webkit-scrollbar {
  display: block;
}
</style>
