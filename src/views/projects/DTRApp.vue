<script setup lang="ts">
import ProjectLayout from '@/components/layouts/ProjectLayout.vue';
import ProjectCollaborators from '@/components/sub-components/ProjectCollaborators.vue';
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue';
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue';

const tags = ['Mobile App', 'Flutter']
const images = ['../images/SampleImage1.png', '../images/SampleImage3.png', '../images/SampleImage4.png', '../images/icons/trophy.png',]
const overview = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const codeLink = 'https://github.com/Kheemwel/dtr-app'
const designLink = 'https://www.figma.com/design/MYHYjQh0xNldn8AkEag8qe/Daily-Time-Record-by-Kimwely?node-id=0-1&t=WbCqTiVDDzirQARk-1'
const downloadLink = 'https://github.com/Kheemwel/dtr-app/releases/download/v0.2.0-rc1/dtr-v0.2.0-rc1.apk'
const role = 'Lead Developer'
const date = 'April 9, 2024'
const languages = ['../images/languages/dart.png']
const frameworks = ['../images/frameworks/flutter.png']
const tools = ['../images/tools/vscode.png']
const collaborators = [
    {
        name: 'Anne Louise Lopez',
        role: 'UI/UX Designer',
        link: 'https://github.com/anneldl'
    },
]
</script>

<template>
    <ProjectLayout logo="../images/icons/idea.png" title="DTR App">
        <template #overview>
            <ProjectOverview :tags=tags :images=images :overview=overview :description=description />
        </template>
        <template #technical>
            <ProjectTechnicalDetails :codeLink=codeLink :designLink=designLink :downloadLink=downloadLink :role=role
                :date=date :languages=languages :frameworks=frameworks :tools=tools />
        </template>
        <template #collaborators>
            <ProjectCollaborators :collaborators=collaborators />
        </template>
    </ProjectLayout>
</template>