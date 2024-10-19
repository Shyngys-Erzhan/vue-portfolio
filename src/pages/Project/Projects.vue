<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import { useRouter } from "vue-router";
import projects from "@/data/projects.json"; 

const router = useRouter();

const goToProjectDetail = (id) => {
  router.push({ name: "ProjectDetail", params: { id } });
};
</script>

<template>
  <Header />
  <div class="projects-gallery">
    <h1>All Projects</h1>
    <div class="projects-container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        @click="goToProjectDetail(project.id)"
      >
        <img :src="project.image" :alt="project.title" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.projects-gallery {
  padding: 20px;
}

.projects-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.project-card {
  width: 350px;
  background-color: var(--home-card-background-color);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.7s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
}

img {
  width: 100%;
  height: auto;
}

.project-card:hover {
  transform: translateY(-10px);
}
</style>
