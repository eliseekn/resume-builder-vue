<template>
    <div class="basis-full bg-gray-400 pt-5">
        <div class="p-8 mb-5 bg-white h-full w-[210mm] mx-auto" id="resume-content">
            <div v-if="sectionStore.has('header')">
                <Header />
                <hr class="my-5" />
            </div>

            <div v-if="sectionStore.has('about')">
                <About />
                <hr class="my-5" />
            </div>

            <div v-if="sectionStore.has('skills')">
                <Skills />
                <hr class="my-5" />
            </div>

            <div v-if="sectionStore.has('experience')">
                <Experience />
                <hr class="my-5" />
            </div>

            <div v-if="sectionStore.has('education')">
                <Education />
                <hr class="my-5" />
            </div>

            <div v-if="sectionStore.has('certification')">
                <Certification />
                <hr class="my-5" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {sectionStore} from "../../services/store"
    import Header from './Header.vue'
    import About from "./About.vue"
    import Skills from "./Skills.vue"
    import Experience from "./Experience.vue"
    import Education from "./Education.vue"
    import Certification from "./Certification.vue"
</script>
