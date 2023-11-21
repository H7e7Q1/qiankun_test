import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
    // 生产环境需要指定运行域名作为base
  // base: 'http://xxx.com/',
  // base: '/vue3-vite',//这里使用在主应用中注册的activeRule
  server: {
    port: 9529,
    cors: true,
    origin: 'http://localhost:9529'
  },
  plugins: [
    // 在开发模式下需要把react()关掉
    // https://github.com/umijs/qiankun/issues/1257
    // react(),
    qiankun('react18ViteApp', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
})
