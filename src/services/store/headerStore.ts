import { reactive } from 'vue'

export const headerStore = reactive({
    state: {
        fullName: '',
        emailAddress: '',
        jobTitle: '',
        location: '',
        phoneNumber: '',
        portfolioUrl: '',
    },
    set(state: {}) {
        this.state = Object.assign(this.state, state)
    }
})
