import { reactive } from 'vue'

export interface Props {
    id: number,
    company: string,
    startDate: string,
    endDate: string,
    jobTitle: string,
    jobDescription: string
}

const initialState: Props[] = []

export const experienceStore = reactive({
    state: initialState,
    add(experience: Props) {
        this.state.push(experience)
    },
    remove(id: number) {
        this.state = this.state.filter((state: Props) => state.id !== id)
    },
    has(experience: Props) {
        return this.state.includes(experience)
    }
})
