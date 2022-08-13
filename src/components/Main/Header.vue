<template>
    <div class="text-center">
        <p class="font-medium">{{ headerStore.state.fullName }}</p>
        <p class="font-medium text-2xl mt-3">{{ headerStore.state.jobTitle }}</p>

        <div class="flex justify-center items-center gap-x-5 mt-3">
            <div v-if="headerStore.state.location !== ''" class="flex flex-row items-center">
                <font-awesome-icon :icon="['fa-solid', 'location-dot']" size='sm' />
                <p class="ml-2">{{ headerStore.state.location }}</p>
            </div>

            <div v-if="headerStore.state.phoneNumber !== ''" class="flex flex-row items-center">
                <font-awesome-icon :icon="['fa-solid', 'phone']" size='sm' />
                <p class="ml-2">{{ headerStore.state.phoneNumber }}</p>
            </div>
        </div>

        <div class="flex justify-center items-center gap-x-5 mt-2">
            <div v-if="headerStore.state.emailAddress !== ''" class="flex flex-row items-center">
                <font-awesome-icon :icon="['fa-solid', 'envelope']" size='sm' />
                <p class="ml-2">{{ headerStore.state.emailAddress }}</p>
            </div>

            <div v-if="headerStore.state.portfolioUrl !== ''" class="flex flex-row items-center">
                <font-awesome-icon :icon="['fa-solid', 'link']" size='sm' />
                <p class="ml-2">{{ headerStore.state.portfolioUrl }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {headerStore} from "../../services/store"
</script>
