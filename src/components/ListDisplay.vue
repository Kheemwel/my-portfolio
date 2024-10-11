<script setup>
defineProps({
    list: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <ol>
        <li v-for="item in list" :key="item">
            {{ item }}
        </li>
    </ol>
</template>