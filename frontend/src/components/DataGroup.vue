<script setup lang="ts">
defineProps({
    title: String,
    content: {
        type: [String, Number],
        required: false
    }
})
</script>

<template>
    <h3 class="font-bold">{{ title }}</h3>
    <p class="text-gray-500">
        {{ content }}
    </p>
</template>
