<template>
    <div class="flex items-center mt-3">
        <div class="section-header" @click="handleDisplayOptions">
            <span>Skills</span>
            <font-awesome-icon :icon="displayOptions ? ['fa-solid', 'angle-up'] : ['fa-solid', 'angle-down']" />
        </div>

        <button class="btn-circle" @click="handleRemoveSection">
            <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
    </div>

    <div class="ml-2 px-5" v-if="displayOptions">
        <div class="mt-3 flex items-center">
            <input type="text" class="rounded-lg w-full" placeholder="Skill name" v-model="state" />
            <button class="btn ml-3 py-2 disabled:bg-gray-300" @click="handleAddSkill">Add</button>
        </div>

        <div class="mt-3 grid grid-cols-1 gap-1">
            <div class="flex items-center justify-between badge" v-for="skill in skillsStore.state">
                <span>{{ skill }}</span>
                <span class="cursor-pointer px-1 font-bold" @click="handleRemoveSkill(skill)">x</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore, skillsStore} from "../../services/store"

    const displayOptions = ref<boolean>(false)
    const state = ref<string>('')

    const handleDisplayOptions = () => {displayOptions.value = !displayOptions.value}
    const handleRemoveSection = () => {sectionStore.remove('skills')}
    const handleRemoveSkill = (skill: string) => {skillsStore.remove(skill)}

    const handleAddSkill = () => {
        if (state.value === '') return alert('Please provide a valid skill')
        if (skillsStore.has(state.value)) return alert('This skill has already been added')

        skillsStore.add(state.value)
        state.value = ''
    }
</script>
