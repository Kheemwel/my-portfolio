<script setup>
import CollaboratorCard from '../CollaboratorCard.vue';

defineProps({
    collaborators: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="collaborators">
        <CollaboratorCard v-for="collab in collaborators" :key=collab.name :name=collab.name :role=collab.role
            :link=collab.link />
    </div>
</template>

<style scoped>
.collaborators {
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
    justify-content: center;
    padding-bottom: 25px;
}
</style>