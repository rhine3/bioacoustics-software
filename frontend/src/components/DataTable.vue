<script setup lang="ts">
import DataModal from "@/components/DataModal.vue";
import { ref, computed } from "vue";
import objects, { type DataEntryType } from "../data";
import { getData, nameLookup } from "../data/formatting";
type DataEntryKey = keyof DataEntryType;


var dataEntries = ref(objects);

var nameKeys = Object.keys(nameLookup);
// var visibleKeys = ref(["name", "taxonomicClass", "totalDuration", "locality"]);
var visibleKeys = ref(["title", "description", "type" , "paidOrFree"]);
var hiddenKeys = ["url"];

var currentData = ref<DataEntryType>(objects[0]);

enum SortDirection {
    Ascending = 0,
    Descending = 1
}

const modalRef = ref();

var sortBy = ref({
    key: "",
    sortDirection: SortDirection.Ascending
});

function openModal(entry: DataEntryType, $event: MouseEvent) {
    if ($event.target instanceof Element && $event.target.tagName.toLowerCase() === "a") {
        return;
    } 
    currentData.value = entry;
    modalRef.value.showModal();
}

function updateChecked(key: string) {
    if (visibleKeys.value.includes(key) && visibleKeys.value.length > 1) {
        visibleKeys.value.splice(visibleKeys.value.indexOf(key), 1);
    } else {
        visibleKeys.value.push(key);
    }
}

function updateSort(key: string) {
    if (key === sortBy.value.key) {
        sortBy.value.sortDirection = (sortBy.value.sortDirection + 1) % 2;
    } else {
        sortBy.value = {
            key: key,
            sortDirection: SortDirection.Ascending
        };
    }
    sorted(sortBy.value.key as DataEntryKey, sortBy.value.sortDirection as number);
}

function sorted(prop: DataEntryKey, ascending: SortDirection) {
    // TODO: explain this
    var mult = ascending === SortDirection.Ascending ? -1 : 1;
    // TODO: sort correctly for all cases (string | number | Date | string[] | undefined) (and not as any)
    dataEntries.value.sort(function (a, b) {
        var aVal = a[prop] as any;
        var bVal = b[prop] as any;
        
        // Case-insensitive comparison for strings
        if (typeof aVal === "string" && typeof bVal === "string") {
            return aVal.localeCompare(bVal, undefined, { sensitivity: "base" }) * mult;
        }
        
        if (aVal > bVal) {
            return 1 * mult;
        }
        if (aVal < bVal) {
            return -1 * mult;
        }
        return 0;
    });
}

const searchQuery = ref("");

// Computed filtered entries
const filteredEntries = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (!query) return dataEntries.value;

    return dataEntries.value.filter((entry) => {
        return visibleKeys.value.some((key) => {
            const value = getData(entry, key);
            return String(value).toLowerCase().includes(query);
        });
    });
});

</script>

<template>
    <div class="sticky top-0 z-10 bg-white mb-4 p-2 shadow-sm">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Search..."
                class="border border-gray-300 rounded px-4 py-2 w-full text-sm"
            />
    </div>
    
    <div class="max-h-32 overflow-y-scroll mb-5">
        <div class="flex flex-wrap place-content-center">
            <div v-for="key in nameKeys.filter(x => !hiddenKeys.includes(x))"
                class="flex items-center p-4 border border-gray-200 rounded xs:w-1/4 sm:w-1/5 lg:w-1/6 xl:w-1/6 m-1 h-6 cursor-pointer">
                <input v-bind:id="key" v-bind:checked="visibleKeys.includes(key)" @change="updateChecked(key)"
                    type="checkbox" v-bind:value="key" v-bind:name="key"
                    class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer">
                <label v-bind:for="key"
                    class="w-full h-auto py-4 ms-2 text-xs font-medium text-gray-900 overflow-hidden text-ellipsis cursor-pointer">
                    {{ nameLookup[key] }}
                </label>
            </div>
        </div>
    </div>

    <div class="data-table overflow-hidden">
        
        <DataModal ref="modalRef" v-bind:data="currentData"></DataModal>
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th @click="updateSort(key)" v-for="key in visibleKeys" scope="col"
                        class="px-6 py-3 max-w-6 overflow-x-auto text-ellipsis select-none cursor-pointer">
                        {{ nameLookup[key] }}
                        <span>
                            <svg v-if="key === sortBy.key"
                                class="w-2 h-2 mb-1 inline-block text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                <path v-if="sortBy.sortDirection === 0" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"></path>
                                <path v-if="sortBy.sortDirection === 1" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
                            </svg>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in filteredEntries" v-on:click="openModal(entry, $event)"
                class="bg-white border-b hover:bg-gray-100 cursor-pointer">
                    <th v-for="key in visibleKeys" scope="row"
                        class="px-6 py-4 font-medium max-w-6 text-gray-900 whitespace-nowrap">
                        <div class="truncate" v-html="getData(entry, key)"></div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
.data-table {
    height: 550px;
    overflow-y: scroll;
}

thead th {
    position: sticky;
    top: 0;
    background-color: #f9fafb; /* or white */
    z-index: 10;
}


</style>
