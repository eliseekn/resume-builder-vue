<template>
    <Title :content="__('about')" />
    <p>{{ aboutStore.state }}</p>
</template>

<script setup lang="ts">
    import {aboutStore} from "../../services/store"
    import {Title} from '../Style'
    import __ from "../../lang"
</script>
