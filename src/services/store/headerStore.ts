import { reactive } from 'vue'

export interface Props {
    fullName: string,
    emailAddress: string,
    jobTitle: string,
    location: string,
    phoneNumber: string,
    portfolioUrl: string,
}

const initialState: Props = {
    fullName: '',
    emailAddress: '',
    jobTitle: '',
    location: '',
    phoneNumber: '',
    portfolioUrl: '',
}

export const headerStore = reactive({
    state: initialState,
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
