import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

const app = createApp(App)

library.add(faUserSecret)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')