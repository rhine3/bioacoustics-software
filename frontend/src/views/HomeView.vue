<script setup lang="ts">
import DataTable from "../components/DataTable.vue";
</script>
<!--  TODO: use the createLink function -->
<template>
    <div class="flow-root">  
        <img class="h-auto max-w-xs float-left" src=".././assets/kitzes-logo.png" width=200 alt="Logo of the BiocAI project">
        <!-- <img class="h-auto  max-w-xs rounded-lg float-right" src=".././assets/EU.png" width=90 alt="EU flag"> -->
    </div>
    <div class="text-center mb-4">
        <h1 class="about text-center mb-4 mt-4 text-4xl font-extrabold">Bioacoustics Software</h1>
        <p>The Bioacoustics Software Database is a website and associated <a class="text-href" href="https://docs.google.com/spreadsheets/d/1Ba1MY4o5Sm1f08IekJcbxAtSjkDN71Z1RZ42kzrofJ0/edit?gid=0#gid=0">spreadsheet</a> compiling current software used in bioacoustics. </p>
        <p>See this <a class="text-href" href="https://github.com/rhine3/bioacoustics-software/blob/main/README.md">readme</a> for more information. Please submit requests for updates or additions to the database using this <a class="text-href" href="https://docs.google.com/forms/d/e/1FAIpQLSdE_UX-bvohtBLSXTAKbtapvR5wuw30WWIZcCjROp4HsdklTQ/viewform">form</a>.</p>
    </div>
    <DataTable></DataTable>
</template>