<template>
    <div class="flex items-center mt-3">
        <div class="section-header" @click="handleDisplayOptions">
            <span>Education</span>
            <font-awesome-icon :icon="displayOptions ? ['fa-solid', 'angle-up'] : ['fa-solid', 'angle-down']" />
        </div>

        <button class="btn-circle" @click="handleRemoveSection">
            <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
    </div>

    <div class="ml-2 px-5" v-if="displayOptions">
        <div class="mt-3">
            <input type="search" class="rounded-lg w-full mb-3" placeholder="School name" v-model="state.name" />
            <input type="search" class="rounded-lg w-full mb-3" placeholder="Degree" v-model="state.degree" />

            <div class="flex items-center mb-3">
                <input type="date" class="rounded-lg w-1/2 mr-3" placeholder="Start date" v-model="state.startDate" />
                <input type="date" class="rounded-lg w-1/2" placeholder="End date" v-model="state.endDate" />
            </div>

            <button class="btn py-2 disabled:bg-gray-300 w-full" @click="handleAddEducation">Add</button>

            <div class="mt-3 grid grid-cols-1 gap-1">
                <div class="flex items-center justify-between badge" v-for="education in educationStore.state">
                    <span>{{ education.degree }} at {{ education.name }}</span>
                    <span class="cursor-pointer px-1 font-bold" @click="handleRemoveEducation(education.id)">x</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore, educationStore} from "../../services/store"
    import {Props} from "../../services/store/educationStore"

    const displayOptions = ref<boolean>(false)
    const stateId = ref<number>(1)
    const state = ref<Props>({
        id: stateId.value,
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
    })

    const handleDisplayOptions = () => {displayOptions.value = !displayOptions.value}
    const handleRemoveSection = () => {sectionStore.remove('education')}
    const handleRemoveEducation = (id: number) => {educationStore.remove(id)}

    const handleAddEducation = () => {
        if (
            state.value.school === "" ||
            state.value.degree === "" ||
            state.value.startDate === "" ||
            state.value.endDate === ""
        ) {
            return alert('Please provide a valid education')
        }

        if (educationStore.has(state.value)) return alert('This education has already been added')

        stateId.value = stateId.value + 1
        educationStore.add(state.value)

        state.value = {
            id: stateId.value,
            school: '',
            degree: '',
            startDate: '',
            endDate: ''
        }
    }
</script>
