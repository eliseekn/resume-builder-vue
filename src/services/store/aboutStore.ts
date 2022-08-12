import { reactive } from 'vue'

export const aboutStore = reactive({
    state: '',
    set(state: string) {
        this.state = state
    }
})
