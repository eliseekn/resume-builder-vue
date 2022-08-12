<template>
    <div class="flex items-center mt-3">
        <div class="section-header" @click="handleDisplayOptions">
            <span>Professional Experience</span>
            <font-awesome-icon :icon="displayOptions ? ['fa-solid', 'angle-up'] : ['fa-solid', 'angle-down']" />
        </div>

        <button class="btn-circle" @click="handleRemoveSection">
            <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
    </div>

    <div class="ml-2 px-5" v-if="displayOptions">
        <div class="mt-3">
            <input type="search" class="rounded-lg w-full mb-3" placeholder="Company name" v-model="state.name" />
            <input type="search" class="rounded-lg w-full mb-3" placeholder="Job title" v-model="state.jobTitle" />

            <textarea
                class="rounded-lg w-full mb-3 resize-none"
                placeholder="Job description (separate with # to create a list)"
                rows="5"
                v-model="state.jobDescription"
            ></textarea>

            <div class="flex items-center mb-3">
                <input type="date" class="rounded-lg w-1/2 mr-3" placeholder="Start date" v-model="state.startDate" />
                <input type="date" class="rounded-lg w-1/2" placeholder="End date" v-model="state.endDate" />
            </div>

            <button class="btn py-2 disabled:bg-gray-300 w-full" @click="handleAddExperience">Add</button>

            <div class="mt-3 grid grid-cols-1 gap-1">
                <div class="flex items-center justify-between badge" v-for="experience in experienceStore.state">
                    <span>{{ experience.jobTitle }} at {{ experience.name }}</span>
                    <span class="cursor-pointer px-1 font-bold" @click="handleRemoveExperience(experience.id)">x</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore, experienceStore} from "../../services/store"
    import {Props} from "../../services/store/experienceStore"

    const displayOptions = ref<boolean>(false)
    const stateId = ref<number>(1)
    const state = ref<Props>({
        id: stateId.value,
        name: '',
        jobTitle: '',
        jobDescription: '',
        startDate: '',
        endDate: ''
    })

    const handleDisplayOptions = () => {displayOptions.value = !displayOptions.value}
    const handleRemoveSection = () => {sectionStore.remove('experience')}
    const handleRemoveExperience = (id: number) => {experienceStore.remove(id)}

    const handleAddExperience = () => {
        if (
            state.value.name === "" ||
            state.value.jobTitle === "" ||
            state.value.jobDescription === "" ||
            state.value.startDate === "" ||
            state.value.endDate === ""
        ) {
            return alert('Please provide a valid experience')
        }

        if (experienceStore.has(state.value)) return alert('This experience has already been added')

        stateId.value = stateId.value + 1
        experienceStore.add(state.value)

        state.value = {
            id: stateId.value,
            name: '',
            jobTitle: '',
            jobDescription: '',
            startDate: '',
            endDate: ''
        }
    }
</script>
