import { reactive } from 'vue'

const initialState: string[] = []

export const sectionStore = reactive({
    state: initialState,
    add(section: string) {
        this.state.push(section)
    },
    remove(section: string) {
        this.state = this.state.filter((state: string) => state !== section)
    },
    has(section: string) {
        return this.state.includes(section)
    }
})
