<script setup>
import ProjectLayout from '@/components/layouts/ProjectLayout.vue';
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue';
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue';

const tags = ['Mobile App', 'AIDE', 'Java']
const images = ['../images/SampleImage1.png', '../images/SampleImage3.png', '../images/SampleImage4.png', '../images/trophy.png',]
const overview = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
</script>

<template>
    <ProjectLayout logo="../images/icons/trophy.png" title="FLAGMS">
        <template #overview>
            <ProjectOverview :tags=tags :images=images :overview=overview :description=description />
        </template>
        <template #technical>
            <ProjectTechnicalDetails />
        </template>
        <template #collaborators>
            collabs
        </template>
    </ProjectLayout>
</template>