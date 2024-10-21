<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; 
import projects from "@/data/projects.json"; 

const route = useRoute(); 
const projectId = ref(route.params.id); 
const project = ref(null);

onMounted(() => {
  project.value = projects.find(proj => proj.id === projectId.value);
});
</script>

<template>
  <div v-if="project" class="project-detail">
    <h1>{{ project.title }}</h1>
    <img :src="project.image" :alt="project.title" />
    <p>{{ project.fullDescription }}</p>
    <strong>Features:</strong>
    <ul>
      <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
    </ul>
  </div>
</template>

<style scoped>
.project-detail {
  padding: 20px;
  background-color: var(--home-project-background-color);
}

img {
  width: 100%;
  height: auto;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
