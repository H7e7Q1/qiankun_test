
<script setup lang="ts">
import actions from "@/shared/actions.ts"
import { onMounted, ref } from "vue";
onMounted(()=>{
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者： 改变前的值为 ", prevState);
      console.log("主应用观察者：登录状态发生改变，改变后的值为 ", state);
      count.value=state.count
    });
}) 
let count=ref(0)
const addCount =()=>{
  count.value = count.value+1
  actions.setGlobalState({ count:count.value });
}
</script>

<template>
  <main>
    我是主应用的内容，红色框内是子应用
    <button @click="addCount"> count {{ count }}</button>
  </main>
</template>
