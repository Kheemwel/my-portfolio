<script setup>
import ProjectLayout from '@/components/layouts/ProjectLayout.vue';
import ProjectCollaborators from '@/components/sub-components/ProjectCollaborators.vue';
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue';
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue';

const tags = ['Mobile App', 'AIDE', 'Java']
const images = ['../images/SampleImage1.png', '../images/SampleImage3.png', '../images/SampleImage4.png', '../images/icons/trophy.png',]
const overview = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const codeLink = 'https://github.com/Kheemwel/SciQuiz'
const downloadLink = 'https://github.com/Kheemwel/aa-tv-app/releases/download/v1.0.0-alpha/AA.TV.Demo.apk'
const role = 'Lead Developer'
const date = '2019'
const languages = ['../images/languages/java.png']
const frameworks = ['../images/frameworks/android.png']
const tools = ['../images/tools/aide.png', '../images/tools/android-studio.png']
const collaborators = [
    {
        name: 'Kyle David Bonaobra',
        role: 'Arts/Design',
        link: ''
    },
    {
        name: 'Ron Car Dilao',
        role: 'Arts/Design',
        link: 'https://github.com/micronc00'
    },
    {
        name: 'Justine John Movido',
        role: 'Sound/Music',
        link: ''
    },
    {
        name: 'Marc Rodrigo Iraola',
        role: 'Beta Tester',
        link: ''
    },
    {
        name: 'Charles Canlas',
        role: 'Beta Tester',
        link: ''
    },
]
</script>

<template>
    <ProjectLayout logo="../images/icons/idea.png" title="SciQuiz">
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