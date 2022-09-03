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
    setFullName(state: string) {
        this.state.fullName = state
    },
    setJobTitle(state: string) {
        this.state.jobTitle = state
    },
    setLocation(state: string) {
        this.state.location = state
    },
    setEmailAddress(state: string) {
        this.state.emailAddress = state
    },
    setPhoneNumber(state: string) {
        this.state.phoneNumber = state
    },
    setPortfolioUrl(state: string) {
        this.state.portfolioUrl = state
    }
})
