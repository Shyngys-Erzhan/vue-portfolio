<script setup>
import VueIcon from "@/assets/icons/vue.svg";
import { useThemeStore } from "@/stores/themeStore";
import { onMounted } from "vue";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});
</script>

<template>
  <header>
    <img :src="VueIcon" alt="Logo" />
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contacts</router-link></li>
      </ul>
    </nav>
    <select @change="(event) => themeStore.setTheme(event.target.value)">
      <option value="light">Светлая тема</option>
      <option value="dark">Темная тема</option>
      <option value="blue">Голубая тема</option>
    </select>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 25px 100px;
  background-color: var(--header-background-color);
  color: var(--text-color);
}

img {
  width: 30px;
  height: 30px;
  transition: filter 0.3s ease, transform 1s ease;
}

ul {
  list-style: none;
  gap: 50px;
  font-size: 20px;
  padding: 0;
  margin: 0;
  display: flex;
}

a {
  text-decoration: none;
  color: var(--link-color);
}

img:hover {
  filter: drop-shadow(0 0 20px #42b883);
  transform: scale(1.5);
}

a:hover {
  color: var(--hover-color);
}

.router-link-active {
  border-bottom: 2px solid var(--link-color);
}
</style>
