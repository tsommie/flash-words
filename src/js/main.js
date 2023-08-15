import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import App from '../App.vue'
import routes from './routes.js'

window.bootstrap = bootstrap

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)

app.mount('#app')
