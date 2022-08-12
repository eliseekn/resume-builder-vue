<template>
    <Title :content="__('education')" />

    <ul class="list-disc ml-10 mt-3" v-for="education in educationStore.state">
        <li>
            <span class="font-medium italic">{{ education.degree }}</span>
            {{ __('at') }}
            <span class="font-medium italic">{{ education.name }}</span>

            (
                <span class="italic">
                    {{ setStartDate(education.startDate) }} -
                    {{ setEndDate(education.endDate) }}
                </span>
            )
        </li>
    </ul>
</template>

<script setup lang="ts">
    import {Title} from '../Style'
    import __ from "../../lang"
    import {educationStore, languageStore} from "../../services/store"
    import moment from "moment/moment"
    import 'moment/locale/fr'
    import 'moment/locale/en-gb'

    const setStartDate = (startDate: string) => {
        moment.locale(languageStore.state)
        return moment(startDate).format('ll')
    }

    const setEndDate = (endDate: string) => {
        moment.locale(languageStore.state)
        return moment(endDate).format('ll')
    }
</script>
