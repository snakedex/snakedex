import {createApp} from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router';
import 'vuetify/styles'
import { createVuetify } from "vuetify/framework";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import './style.css';
import '@mdi/font/css/materialdesignicons.css'

import Main from './pages/Main.vue'
import SelectFile from "./pages/SelectFile.vue";

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
})

const routes =[
    {path: '/', component: Main},
    {path: '/selectFile', component: SelectFile},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')
