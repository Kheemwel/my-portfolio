<script setup>
import ProjectLayout from '@/components/layouts/ProjectLayout.vue';
import ProjectOverview from '@/components/sub-components/ProjectOverview.vue';
import ProjectTechnicalDetails from '@/components/sub-components/ProjectTechnicalDetails.vue';

const tags = ['OJT Project', 'Android TV App', 'Flutter']
const images = ['../images/SampleImage1.png', '../images/SampleImage3.png', '../images/SampleImage4.png', '../images/icons/trophy.png',]
const overview = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus autem atque nemo porro aliquid laborum voluptates fuga repellendus. Distinctio sed corrupti placeat inventore itaque maiores quasi voluptate nostrum explicabo."
const codeLink = 'https://github.com/Kheemwel/aa-tv-app'
const designLink = 'https://www.figma.com/design/JbNUKncMCpg0KMQHXC2Drc/Android-TV-Box-App-Project?node-id=0-1&t=uluJNSRpho2lU0PZ-1'
const downloadLink = 'https://github.com/Kheemwel/SciQuiz/releases/download/v1.1/SciQuiz.apk'
const role = 'Full Stack Developer'
const date = 'April 4, 2023'
const languages = ['../images/languages/dart.png', '../images/languages/php.png']
const frameworks = ['../images/frameworks/flutter.png', '../images/frameworks/laravel.png', '../images/frameworks/bootstrap.png']
const tools = ['../images/tools/vscode.png', '../images/tools/xampp.png']
</script>

<template>
    <ProjectLayout logo="../images/icons/idea.png" title="AA TV">
        <template #overview>
            <ProjectOverview :tags=tags :images=images :overview=overview :description=description />
        </template>
        <template #technical>
            <ProjectTechnicalDetails :codeLink=codeLink :designLink=designLink :downloadLink=downloadLink :role=role
                :date=date :languages=languages :frameworks=frameworks :tools=tools />
        </template>
    </ProjectLayout>
</template>