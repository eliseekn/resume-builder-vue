<template>
    <div class="flex items-center mt-3">
        <div class="section-header" @click="handleDisplayOptions">
            <span>About</span>
            <font-awesome-icon :icon="displayOptions ? ['fa-solid', 'angle-up'] : ['fa-solid', 'angle-down']" />
        </div>

        <button class="btn-circle" @click="handleRemoveSection">
            <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
    </div>

    <div class="ml-2 px-5" v-if="displayOptions">
        <div class="mt-3">
            <textarea
                class="rounded-lg w-full resize-none"
                placeholder="I have 3+ years experience in user interfaces and web application development."
                rows="5"
                v-model="state"
                v-on:input="aboutStore.set(state)"
            ></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore, aboutStore} from "../../services/store"

    const displayOptions = ref<boolean>(false)
    const state = ref<string>('')

    const handleDisplayOptions = () => {displayOptions.value = !displayOptions.value}
    const handleRemoveSection = () => {sectionStore.remove('about')}
</script>
