import { reactive } from 'vue'

const initialState: string[] = []

export const skillsStore = reactive({
    state: initialState,
    add(skill: string) {
        this.state.push(skill)
    },
    remove(skill: string) {
        this.state = this.state.filter((state: string) => state !== skill)
    },
    has(skill: string) {
        return this.state.includes(skill)
    }
})
