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
const childrenApps = [
  {
    name: 'vue3ViteApp',
    entry: '//localhost:9527',
    container: '#childApp',
    activeRule: '/vue3-vite',
  },
  {
    name: 'vue2WebpackApp',
    entry: '//localhost:9528',
    container: '#childApp',
    activeRule: '/vue2-webpack',
  },
]
registerMicroApps(childrenApps, {
  beforeLoad: [async (app: any) => console.log('beforeLoad', app)],
  beforeMount: [async (app: any) => console.log('beforeMount', app)],
  afterMount: [async (app: any) => console.log('afterMount', app)],
});
// 启动 qiankun
start();