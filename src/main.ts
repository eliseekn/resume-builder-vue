import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faPlus,
    faMinus,
    faAngleUp,
    faAngleDown,
    faLocationDot,
    faPhone,
    faLink,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"

library.add(
    faPlus,
    faMinus,
    faAngleUp,
    faAngleDown,
    faLocationDot,
    faPhone,
    faLink,
    faEnvelope
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
