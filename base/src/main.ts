import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

registerMicroApps([
  {
    name: 'vue3ViteApp',
    entry: '//localhost:3000',
    container: '#childApp',
    activeRule: '/vue3-vite',
  }
]);
// 启动 qiankun
start();