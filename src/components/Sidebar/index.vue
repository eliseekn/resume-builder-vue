<template>
    <div class="basis-1/4 border-r-2 p-5 h-screen sticky top-0 overflow-y-scroll">
        <div class="flex items-center">
            <select name="sections" id="sections" class="w-full rounded-lg cursor-pointer" v-model="state">
                <option value="" selected>Select a section</option>
                <option value="header">Header</option>
                <option value="about">About</option>
                <option value="skills">Skills</option>
                <option value="experience">Professional Experience</option>
                <option value="education">Education</option>
                <option value="certification">Certification</option>
            </select>

            <button class="btn-circle" @click="handleAddSection">
                <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
        </div>

        <Separator />

        <Header v-if="sectionStore.has('header')" />
        <About v-if="sectionStore.has('about')" />
        <Skills v-if="sectionStore.has('skills')" />
        <Experience v-if="sectionStore.has('experience')" />
        <Education v-if="sectionStore.has('education')" />
        <Certification v-if="sectionStore.has('certification')" />
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore} from "../../services/store"
    import {Separator} from "../Style"
    import Header from './Header.vue'
    import About from './About.vue'
    import Skills from "./Skills.vue";
    import Experience from "./Experience.vue"
    import Education from "./Education.vue"
    import Certification from "./Certification.vue"

    const state = ref<string>('')

    const handleAddSection = () => {
        if (!sectionStore.has(state.value) || state.value !== '') {
            sectionStore.add(state.value)
            state.value = ''
        }
    }
</script>
