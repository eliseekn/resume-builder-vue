<template>
    <div class="flex items-center mt-3">
        <div class="section-header" @click="handleDisplayOptions">
            <span>Header</span>
            <font-awesome-icon :icon="displayOptions ? ['fa-solid', 'angle-up'] : ['fa-solid', 'angle-down']" />
        </div>

        <button class="btn-circle" @click="handleRemoveSection">
            <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
    </div>

    <div class="ml-2 px-5" v-if="displayOptions">
        <div class="mt-3">
            <label for="full-name">Full Name</label>
            <input
                type="search"
                class="rounded-lg w-full"
                id="full-name"
                placeholder="Elisée Kouadio N'Guessan"
                v-model="state.fullName"
            />
        </div>

        <div class="mt-3">
            <label for="job-title">Job Title</label>
            <input
                type="search"
                class="rounded-lg w-full"
                id="job-title"
                placeholder="Full-stack Web Developer"
                v-model="state.jobTitle"
            />
        </div>

        <div class="mt-3">
            <label for="location">Location</label>
            <input
                type="search"
                class="rounded-lg w-full"
                id="location"
                placeholder="Abidjan, Côte d'Ivoire"
                v-model="state.location"
            />
        </div>

        <div class="mt-3">
            <label for="email">Email Address</label>
            <input
                type="search"
                class="rounded-lg w-full"
                id="email"
                placeholder="eliseekn@gmail.com"
                v-model="state.emailAddress"
            />
        </div>

        <div class="mt-3">
            <label for="phone-number">Phone Number</label>
            <input
                type="search"
                class="rounded-lg w-full"
                id="phone-number"
                placeholder="(+225) 0759434291/0500471669"
                v-model="state.phoneNumber"
            />
        </div>

        <div class="mt-3">
            <label for="portfolio">Portfolio Url</label>
            <input
                type="search"
                class="rounded-lg w-full"
                id="portfolio"
                placeholder="https://eliseekn.netlify.app"
                v-model="state.portfolioUrl"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import {sectionStore, headerStore} from "../../services/store"

    const displayOptions = ref<boolean>(false)
    const state = ref<{}>(headerStore.state)

    const handleDisplayOptions = () => {displayOptions.value = !displayOptions.value}
    const handleRemoveSection = () => {sectionStore.remove('header')}
</script>
