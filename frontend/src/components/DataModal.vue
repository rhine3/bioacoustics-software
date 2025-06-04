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

function hasContent(data: DataEntryType | undefined, key: keyof DataEntryType): boolean {
    if (!data) return false;
    const value = getData(data, key, true);
    console.log(`Key: ${key}, Value:`, value, `Type: ${typeof value}`);
    // Check if it's a non-empty string
    if (typeof value === 'string') {
        return value.trim() !== '';
    }
    // Check if it's an array
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    // Check for null/undefined
    if (value === null || value === undefined) {
        return false;
    }
    // For other types (numbers, booleans, objects)
    return true;
}

const props = defineProps({
    data: {
        type: Object as PropType<DataEntryType>,
        required: false
    }
})

defineExpose({ showModal });
</script>

<template>
    <fwb-modal v-if="isShowModal" @close="closeModal" size="5xl">
        <template #header>
            <div class="flex items-center text-lg">
                {{ props.data?.title }}
            </div>
        </template>
        <template #body>
            <template v-for="(value, key) in nameLookup" :key="key">
                <div v-if="props.data && hasContent(props.data, key)">
                    <DataGroup :title="value" :content="getData(props.data, key, true)" />
                </div>
            </template>
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