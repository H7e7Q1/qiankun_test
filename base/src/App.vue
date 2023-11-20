<script setup lang="ts">
import { reactive } from 'vue';
import {useRouter, RouterLink, RouterView } from 'vue-router'
let router=useRouter()
let menuInfo:any=reactive({route:[]})
menuInfo.routes =router.options.routes
</script>

<template>
  <div>
    <header>
      <div>
        <nav>
          <RouterLink  v-for="menu in menuInfo.routes" :key="menu.path" :to="menu.path">{{ menu.name }}</RouterLink>
        </nav>
      </div>
    </header>
    <!-- 主应用渲染视区域 -->
    <RouterView />
    <!-- 子应用渲染区域 -->
    <div id='childApp'></div>
  </div>
</template>

<style scoped>
#childApp{
  border:2px solid red;
  height:500px;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-size: 16px;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
