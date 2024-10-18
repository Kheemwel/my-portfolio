<script setup>
import ProjectLayout from '@/components/layouts/ProjectLayout.vue';
import ProjectCollaborators from '@/components/sub-components/ProjectCollaborators.vue';
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue';
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue';

const tags = ['Visual Novel', "Ren'Py", 'Game Development']
const images = ['../images/SampleImage1.png', '../images/SampleImage3.png', '../images/SampleImage4.png', '../images/icons/trophy.png',]
const overview = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const codeLink = 'https://github.com/Kheemwel/FLAGMS'
const downloadLink = 'https://github.com/Kheemwel/Imaginary-Friends/releases/download/demo/Imaginary_Friends-Demo.apk'
const role = 'Programmer'
const date = 'March 2, 2023'
const languages = ['../images/languages/python.png']
const tools = ['../images/tools/renpy.png']
const collaborators = [
    {
        name: 'Justine Mae Juanima',
        role: 'Author',
        link: 'https://github.com/JuanimaJM'
    },
    {
        name: 'Allysah Valerie Dela Cruz',
        role: 'UI Designer',
        link: ''
    },
    {
        name: 'Anne Louise Lopez',
        role: 'UI Designer',
        link: 'https://github.com/anneldl'
    },
]
</script>

<template>
    <ProjectLayout logo="../images/icons/trophy.png" title="Imaginary Friends">
        <template #overview>
            <ProjectOverview :tags=tags :images=images :overview=overview :description=description />
        </template>
        <template #technical>
            <ProjectTechnicalDetails :codeLink=codeLink :downloadLink=downloadLink :role=role :date=date
                :languages=languages :frameworks=frameworks :tools=tools />
        </template>
        <template #collaborators>
            <ProjectCollaborators :collaborators=collaborators />
        </template>
    </ProjectLayout>
</template>