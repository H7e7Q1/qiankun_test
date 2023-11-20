import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
// https://vitejs.dev/config/
export default defineConfig({
  // 生产环境需要指定运行域名作为base
  // base: 'http://xxx.com/',
  base: '/vue3-vite',//这里使用在主应用中注册的activeRule
  server: {
    port: 9527,
    cors: true,
    origin: 'http://localhost:9527'
  },
  // 这里的 'vue3ViteApp' 是子应用名，主应用注册时AppName需保持一致
  // 因为开发环境作为子应用时与热更新插件（可能与其他修改html的插件也会存在冲突）有冲突，所以需要额外的调试配置
  // useDevMode 开启时与热更新插件冲突,使用变量切换
  // 例子中 useDevMode = true 则不使用热更新插件，useDevMode = false 则能使用热更新，但无法作为子应用加载。
  plugins: [vue(), qiankun('vue3ViteApp', {
    useDevMode: true
  })],
})
