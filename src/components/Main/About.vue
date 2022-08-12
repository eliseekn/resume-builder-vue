<template>
    <p class="font-medium text-xl mb-3">
        {{__('about')}}
    </p>

    <p>{{ aboutStore.state }}</p>
</template>

<script setup lang="ts">
    import {aboutStore} from "../../services/store"
    import __ from "../../lang"
</script>
