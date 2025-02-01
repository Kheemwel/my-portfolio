<script setup lang="ts">
import { ref, type PropType } from 'vue'
import NextButton from './widgets/NextButton.vue'
import PrevButton from './widgets/PrevButton.vue'
import ModalView from './ModalView.vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const selectedIndex = ref(0)

function nextImage() {
  if (selectedIndex.value < props.images.length - 1) {
    selectedIndex.value++
  } else {
    selectedIndex.value = 0
  }
}

function prevImage() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--
  } else {
    selectedIndex.value = props.images.length - 1
  }
}

const imageRef = ref<HTMLImageElement | null>(null)
const showModal = ref(false)

function zoomImage(image: string) {
  if (imageRef.value) {
    imageRef.value.src = image
    showModal.value = true
  }
}
</script>

<template>
  <div class="carousel">
    <div class="main">
      <div class="gallery">
        <PrevButton @click="prevImage" size="clamp(32px, 22.8571px + 2.8571vw, 64px)" />
        <div class="image-container">
          <img :src="images[selectedIndex]" @click="zoomImage(images[selectedIndex])" />
        </div>
        <NextButton @click="nextImage" size="clamp(32px, 22.8571px + 2.8571vw, 64px)" />
      </div>
      <div class="indicators">
        <div
          v-for="(img, index) in images"
          :key="img"
          class="indicator"
          :class="{ selected: selectedIndex == index }"
          @click="selectedIndex = index"
        ></div>
      </div>
    </div>
    <ModalView :show="showModal" @closeModal="showModal = false">
      <img ref="imageRef" class="zoom-image" />
    </ModalView>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.gallery {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.image-container {
  width: clamp(180px, 25.7143px + 48.2143vw, 720px);
  height: clamp(90px, 12.8571px + 24.1071vw, 360px);
  display: flex;
  justify-content: center;
}

.image-container > img {
  border-radius: 10px;
  max-width: 100%;
  max-height: 100%;
  cursor: zoom-in;
  user-select: none;
}

.indicators {
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 0px 25px;
}

.indicator {
  width: clamp(8px, 5.7143px + 0.7143vw, 16px);
  height: clamp(8px, 5.7143px + 0.7143vw, 16px);
  border-radius: 90px;
  background-color: var(--color-primary);
  cursor: pointer;
  transition: width 0.5s;
}

.indicator:hover {
  width: clamp(24px, 17.1429px + 2.1429vw, 48px);
}

.indicator.selected {
  background-color: var(--color-neon);
  width: clamp(24px, 17.1429px + 2.1429vw, 48px);
}

.zoom-image {
  max-width: 90vw;
  max-height: 90vh;
  user-select: none;
}

@media (min-width: 320px) {
  .carousel {
    padding: 0px;
  }
}

@media (min-width: 768px) {
  .carousel {
    padding: 5px;
  }
}
</style>
