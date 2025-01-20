<script setup>
import { computed } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

const showModal = computed(() => props.show)
</script>

<template>
    <div class="modal" v-show=showModal>
        <div class="content">
            <slot />
        </div>
        <div class="background" @click="$emit('closeModal')"></div>
    </div>
</template>

<style scoped>
.modal {
    position: absolute;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
}

.content {
    position: absolute;
    display: grid;
    place-items: center;
    z-index: 99;
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
}
</style>