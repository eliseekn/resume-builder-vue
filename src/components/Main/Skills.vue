<template>
    <Title :content="__('skills')" />

    <div class="grid grid-cols-6 gap-1">
        <span class="badge" v-for="skill in skillsStore.state">{{skill}}</span>
    </div>
</template>

<script setup lang="ts">
    import {Title} from '../Style'
    import __ from "../../../lang"
    import {skillsStore} from "../../services/store"
</script>
