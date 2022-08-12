<template>
    <p class="font-medium text-xl mb-3">
        {{__('certifications')}}
    </p>

    <ul class="list-disc ml-10 mt-3" v-for="certification in certificationStore.state">
        <li>
            <span class="font-medium italic">{{ certification.name }}</span>
            {{ __('at') }}
            <span class="font-medium italic">{{ certification.organization }}</span>

            (
                <span class="italic">
                    {{ setIssueDate(certification.issueDate) }}
                </span>
            )
        </li>
    </ul>
</template>

<script setup lang="ts">
    import __ from "../../lang"
    import {certificationStore, languageStore} from "../../services/store"
    import moment from "moment/moment"
    import 'moment/locale/fr'
    import 'moment/locale/en-gb'

    const setIssueDate = (startDate: string) => {
        moment.locale(languageStore.state)
        return moment(startDate).format('ll')
    }
</script>
