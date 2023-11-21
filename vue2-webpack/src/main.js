import Vue from 'vue'
import App from './App.vue'
import './public-path';
Vue.config.productionTip = false
import actions from "@/shared/actions.js"
// let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/vue2-webpack/' : '/',
  //   mode: 'history',
  //   routes,
  // });
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  instance = new Vue({
    // router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// 生命周期必须返回promise
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}