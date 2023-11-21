<script setup lang="ts">
import { onMounted, ref } from 'vue'
import actions from "@/shared/actions";
defineProps<{ msg: string }>()
let count = ref(0)
const addCount=()=>{
  count.value += 1
  actions.setGlobalState({count:count.value})
}
onMounted(()=>{
    actions.onGlobalStateChange((state:any) => {
      const { count:num } = state;
      console.log('count',num);
      count.value = num
    }, true);
  })
</script>

<template>
 <div>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="addCount">count is {{ count }}</button>
  </div>
 </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
