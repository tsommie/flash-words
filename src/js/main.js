import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import '../scss/styles.scss'
// import * as bootstrap from 'bootstrap'
import '@popperjs/core'
import App from '../App.vue'
import routes from './routes.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// window.bootstrap = bootstrap

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.use(VueSweetalert2, {
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  toast: true,
});

window.app = app

app.mount('#app')
