<template>
    <ul class="list-disc ml-10 mt-3">
        {{ props.content }}
    </ul>
</template>

<script setup lang="ts">
    const props = defineProps<{ content: string}>()
</script>
