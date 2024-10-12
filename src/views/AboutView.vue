<script setup>
import TabLayout from '@/components/TabLayout.vue';

const tabs = ['Summary', 'Educational Background', 'Work Experience', 'Certificates', 'Skills', 'Contacts', 'Resume']
</script>

<template>
    <div id="about">
        <img src="/images/SampleProfile.jpg">
        <div id="content">
            <h1>Kimwel Lourence C. Beller</h1>
            <TabLayout :tabs=tabs>
                <template #0>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, rem velit. Commodi cumque animi
                        labore, error nostrum, magni omnis beatae, nobis non ratione dolorum culpa porro deleniti
                        adipisci aliquam voluptates?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, rem velit. Commodi cumque animi
                        labore, error nostrum, magni omnis beatae, nobis non ratione dolorum culpa porro deleniti
                        adipisci aliquam voluptates?</p>
                </template>
                <template #1>
                    Educational Background
                </template>
                <template #2>
                    Work Experience
                </template>
                <template #3>
                    Certificates
                </template>
                <template #4>
                    Skills
                </template>
                <template #5>
                    Contacts
                </template>
                <template #6>
                    Resume
                </template>
            </TabLayout>
        </div>
    </div>
</template>

<style scoped>
#about {
    display: flex;
    padding: 50px;
    gap: 25px;
    overflow: hidden;
}

img {
    width: 256px;
    height: 256px;
    border-radius: 180px;
    border-top: 2px solid var(--color-secondary);
    border-right: 5px solid var(--color-secondary);
    border-bottom: 5px solid var(--color-secondary);
    border-left: 2px solid var(--color-secondary);
}

h1 {
    font: var(--text-display);
    position: sticky;
    padding-top: 50px;
    top: 0px;
    background-color: var(--color-background);
}

#content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: hidden;
}
</style>