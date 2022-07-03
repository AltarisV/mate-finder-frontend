import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Vue3Geolocation from 'vue3-geolocation'
import VueGoogleMaps from '@fawmi/vue-google-maps'

library.add(fas)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(Vue3Geolocation)
  .use(VueGoogleMaps, { load: { key: 'AIzaSyCjJgSzZu0QC8QFrfSfbLZhqJPcclz9xlI' } })
  .use(router)
  .mount('#app')
