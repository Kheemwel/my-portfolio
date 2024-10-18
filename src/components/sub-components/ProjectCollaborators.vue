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
    gap: 50px;
    padding: 0px 50px 50px 50px;
    justify-content: center;
}

.collaborator {
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 45px;
    background-color: var(--color-card);
    padding: 25px;
}

.profile {
    width: 128px;
    height: 128px;
}

.name {
    font: var(--text-subtitle);
}

.role {
    font: var(--text-label-bold);
}
</style>