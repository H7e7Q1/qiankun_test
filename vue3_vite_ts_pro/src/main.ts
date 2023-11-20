import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import './style.css'
import App from './App.vue'

let app: any
// 判断是不是在乾坤环境下运行
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    createApp(App).mount('#app')
} else {
    renderWithQiankun({
        mount(props: any) {
            app = createApp(App)
            app.mount(props.container.querySelector("#app"))

        },
        bootstrap() {
            console.log('bootstrap');
        },
        update() {
            console.log('update');
        },
        unmount() {
            console.log('unmount');
            app?.unmount()
        },
    });
}


