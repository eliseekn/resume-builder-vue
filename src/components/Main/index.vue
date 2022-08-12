<template>
    <div class="basis-full bg-gray-400 pt-5">
        <div class="p-8 mb-5 bg-white h-full w-[210mm] mx-auto" id="resume-content">
            <div v-if="sectionStore.has('header')">
                <Header />
                <Separator />
            </div>

            <div v-if="sectionStore.has('about')">
                <About />
                <Separator />
            </div>

            <div v-if="sectionStore.has('skills')">
                <Skills />
                <Separator />
            </div>

            <div v-if="sectionStore.has('experience')">
                <Experience />
                <Separator />
            </div>

            <div v-if="sectionStore.has('education')">
                <Education />
                <Separator />
            </div>

            <div v-if="sectionStore.has('certification')">
                <Certification />
                <Separator />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {sectionStore} from "../../services/store"
    import {Separator} from "../Style"
    import Header from './Header.vue'
    import About from "./About.vue"
    import Skills from "./Skills.vue"
    import Experience from "./Experience.vue"
    import Education from "./Education.vue"
    import Certification from "./Certification.vue"
</script>
