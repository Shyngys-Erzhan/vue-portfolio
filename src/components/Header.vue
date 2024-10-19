<script setup>
import VueIcon from "@/assets/icons/vue.svg";
import { useThemeStore } from "@/stores/themeStore";
import { ref, onMounted } from "vue";
import themes from "@/data/themes.json";

const themeStore = useThemeStore();
const themeKeys = ref(Object.keys(themes));

const selectedTheme = ref(
  localStorage.getItem("selectedTheme") || themeKeys.value[0]
);

onMounted(() => {
  themeStore.initTheme();
  themeStore.setTheme(selectedTheme.value);
});

const handleThemeChange = () => {
  themeStore.setTheme(selectedTheme.value);
  localStorage.setItem("selectedTheme", selectedTheme.value);
};

const formatThemeName = (themeKey) => {
  return themeKey
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
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
    <select v-model="selectedTheme" @change="handleThemeChange">
      <option v-for="theme in themeKeys" :key="theme" :value="theme">
        {{ formatThemeName(theme) }}
      </option>
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
  color: var(--header-link-color);
}

a::before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--header-link-hover-color);
  transition: width 0.3s ease;
}

a:hover::before {
  width: 100%;
}

a:hover {
  color: var(--header-link-hover-color);
  background-color: var(--header-link-hover-background-color);
  border: 2px solid var(--header-link-hover-border-color);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
img:hover {
  filter: drop-shadow(0 0 20px #42b883);
  transform: scale(1.5);
}

.router-link-active {
  border-bottom: 2px solid var(--header-link-hover-color);
}
</style>
