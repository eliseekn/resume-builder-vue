<template>
    <div class="flex items-center mt-3">
        <div class="section-header" @click="handleDisplayOptions">
            <span>Certification</span>
            <font-awesome-icon :icon="displayOptions ? ['fa-solid', 'angle-up'] : ['fa-solid', 'angle-down']" />
        </div>

        <button class="btn-circle" @click="handleRemoveSection">
            <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
    </div>

    <div class="ml-2 px-5" v-if="displayOptions">
        <div class="mt-3">
            <input type="search" class="rounded-lg w-full mb-3" placeholder="Certification name" v-model="state.name" />
            <input type="search" class="rounded-lg w-full mb-3" placeholder="Organization name" v-model="state.organization" />
            <input type="date" class="rounded-lg w-full mb-3" placeholder="Issue date" v-model="state.issueDate" />
            <button class="btn py-2 disabled:bg-gray-300 w-full" @click="handleAddEducation">Add</button>

            <div class="mt-3 grid grid-cols-1 gap-1">
                <div class="flex items-center justify-between badge" v-for="certification in certificationStore.state">
                    <span>{{ certification.organization }} at {{ certification.name }}</span>
                    <span class="cursor-pointer px-1 font-bold" @click="handleRemoveEducation(certification.id)">x</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore, certificationStore} from "../../services/store"
    import {Props} from "../../services/store/certificationStore"

    const displayOptions = ref<boolean>(false)
    const stateId = ref<number>(1)
    const state = ref<Props>({
        id: stateId.value,
        name: '',
        organization: '',
        issueDate: '',
    })

    const handleDisplayOptions = () => {displayOptions.value = !displayOptions.value}
    const handleRemoveSection = () => {sectionStore.remove('certification')}
    const handleRemoveEducation = (id: number) => {certificationStore.remove(id)}

    const handleAddEducation = () => {
        if (
            state.value.name === "" ||
            state.value.organization === "" ||
            state.value.issueDate === ""
        ) {
            return alert('Please provide a valid certification')
        }

        if (certificationStore.has(state.value)) {
            return alert('This certification has already been added')
        }

        stateId.value = stateId.value + 1
        certificationStore.add(state.value)

        state.value = {
            id: stateId.value,
            name: '',
            organization: '',
            issueDate: '',
        }
    }
</script>
