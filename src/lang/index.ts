import {fr} from './fr'
import {en} from './en'
import {languageStore} from '../services/store'

export default function __(content: string) {
    if (languageStore.state === 'fr') return fr[content]

    return en[content]
}
