<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div id="app-all">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped>
#app-all {
  height: 100vh;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-input {
  border: none;
  outline: none;
  /* border-bottom: 1px solid black; */
  background-color: #00000000;
}
</style>