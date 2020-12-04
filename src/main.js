import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

createApp(App).use(store).use(router).mixin({
  data () {
    return {
      axiosInstance: Axios.create({
        baseURL: 'https://api.unsplash.com/',
        headers: {
          "Accept-Version": "v1",
          "Authorization": `Client-ID ${process.env.VUE_APP_ACCESS_KEY}`
        }
      })
    }
  }
}).mount('#app')
