<template>
    <Title :content="__('experience')" />

    <ul class="list-disc ml-10 mt-3" v-for="experience in experienceStore.state">
        <li>
            <span class="font-medium italic">{{ experience.jobTitle }}</span>
            {{ __('at') }}
            <span class="font-medium italic">{{ experience.name }}</span>

            (
                <span class="italic">
                    {{ setStartDate(experience.startDate) }} -
                    {{ setEndDate(experience.endDate) }}
                </span>
            )
        </li>

        <li class="ml-8 mt-2" v-for="jobDescription in jobDescriptionToList(experience.jobDescription)">
            {{ jobDescription }}
        </li>
    </ul>
</template>

<script setup lang="ts">
    import {Title} from '../Style'
    import __ from "../../lang"
    import {experienceStore, languageStore} from "../../services/store"
    import moment from "moment/moment"
    import 'moment/locale/fr'
    import 'moment/locale/en-gb'

    const jobDescriptionToList = (description: string) => description.split('#')

    const setStartDate = (startDate: string) => {
        moment.locale(languageStore.state)
        return moment(startDate).format('ll')
    }

    const setEndDate = (endDate: string) => {
        moment.locale(languageStore.state)
        return moment(endDate).format('ll')
    }
</script>
