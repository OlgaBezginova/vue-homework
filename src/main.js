import { createApp } from 'vue'
import MyApp from './MyApp.vue'
import router from "./router";

createApp(MyApp).use(router).mount('#app')
