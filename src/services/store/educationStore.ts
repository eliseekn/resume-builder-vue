import { reactive } from 'vue'

export interface Props {
    id: number,
    school: string,
    degree: string,
    startDate: string,
    endDate: string,
}

const initialState: Props[] = []

export const educationStore = reactive({
    state: initialState,
    add(education: Props) {
        this.state.push(education)
    },
    remove(id: number) {
        this.state = this.state.filter((state: Props) => state.id !== id)
    },
    has(education: Props) {
        return this.state.includes(education)
    }
})
