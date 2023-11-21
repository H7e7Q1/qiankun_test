import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let appDom:HTMLElement
const render = (container?:HTMLElement) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
   appDom = container ? container : document.getElementById('root') as HTMLElement
  ReactDOM.createRoot(appDom).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
}
const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      console.log('mount');
      render(props.container);
        //  可以通过props读取主应用的参数：msg
          // 监听主应用传值
          props.onGlobalStateChange((res: { count: any }) => {
            // store.count = res.count
            console.log(res.count)
        })
    },
    bootstrap() {
      console.log('bootstrap');
    },
    unmount() {
      console.log('unmount');
      ReactDOM.createRoot(appDom).unmount()
      // const { container } = props;
      // const mountRoot = container?.querySelector('#root');
      // ReactDOM.unmountComponentAtNode(
      //   mountRoot || document.querySelector('#root')
      // );
    },
    update(){
      console.log('unmount');
    }
  });
}
// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
