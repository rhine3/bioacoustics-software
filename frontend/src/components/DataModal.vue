<script setup lang="ts">
import { FwbButton, FwbModal } from 'flowbite-vue';
import { defineExpose, ref, defineProps, type PropType } from 'vue';
import { type DataEntryType } from "../data";
import { getData, nameLookup } from "../data/formatting";
import DataGroup from "./DataGroup.vue";



const isShowModal = ref(false);

function closeModal() {
    isShowModal.value = false
}
function showModal() {
    isShowModal.value = true
}

var props = defineProps({
    data: Object as PropType<DataEntryType>
})


defineExpose({ showModal });

var nameKeys = Object.keys(nameLookup);

</script>

<template>
    <fwb-modal v-if="isShowModal" @close="closeModal" size="5xl">
        <template #header>
            <div class="flex items-center text-lg">
                {{ props.data?.title }}
            </div>
        </template>
        <template #body>
            <div v-for="key in nameKeys" v-if="props.data">
                <!-- <DataGroup v-bind:title="nameLookup[key]" v-bind:content="getData(props.data, key)"></DataGroup> -->
                 <DataGroup :title="nameLookup[key]" :content="getData(props.data, key, true)" />

            </div>

        </template>
        <template #footer>
            <div class="flex justify-between">
                <fwb-button @click="closeModal" color="alternative">
                    Close
                </fwb-button>
            </div>
        </template>
    </fwb-modal>
</template>
<style>

</style>