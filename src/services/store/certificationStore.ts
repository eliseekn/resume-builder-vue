import { reactive } from 'vue'

export interface Props {
    id: number,
    name: string,
    organization: string,
    issueDate: string,
}

const initialState: Props[] = []

export const certificationStore = reactive({
    state: initialState,
    add(certification: Props) {
        this.state.push(certification)
    },
    remove(id: number) {
        this.state = this.state.filter((state: Props) => state.id !== id)
    },
    has(certification: Props) {
        return this.state.includes(certification)
    }
})
