import { reactive } from 'vue'

export const languageStore = reactive({
    state: 'en',
    set(state: string) {
        this.state = state
    }
})
