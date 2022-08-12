<template>
    <p class="font-medium text-xl mb-3">
        {{ props.content }}
    </p>
</template>

<script setup lang="ts">
    const props = defineProps<{content: string }>()
</script>
