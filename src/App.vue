<script setup>
import Header from "@/components/Header.vue"; 
</script>

<template>
  <div id="app">
    <Header />
    <p></p>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  width: 1440px;
  color: #333;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}
</style>
