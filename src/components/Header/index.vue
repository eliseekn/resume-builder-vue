<template>
    <div class="py-3 px-5 border-b-2">
        <div class="flex justify-between items-center">
            <h1 class="font-medium text-2xl">Resume Builder <small>(v0.1)</small></h1>

            <span>
                <select name="language" id="language" class="py-1 rounded-lg cursor-pointer mr-3" v-model="state" @change="handleSetLanguage">
                    <option value="en" selected>En</option>
                    <option value="fr">Fr</option>
                </select>

                <button type="button" class="btn">
                    Download
                </button>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {languageStore} from "../../services/store"

    const state = ref<string>(languageStore.state)
    const handleSetLanguage = () => {languageStore.set(state.value)}
</script>
