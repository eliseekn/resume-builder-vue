<template>
    <p class="font-medium text-xl mb-3">
        {{__('skills')}}
    </p>

    <div class="grid grid-cols-6 gap-1">
        <span class="badge" v-for="skill in skillsStore.state">
            {{skill}}
        </span>
    </div>
</template>

<script setup lang="ts">
    import __ from "../../lang"
    import {skillsStore} from "../../services/store"
</script>
