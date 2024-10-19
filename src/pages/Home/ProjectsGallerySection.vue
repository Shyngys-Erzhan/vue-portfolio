<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import projects from "@/data/projects.json";

const currentPage = ref(1);
const projectsPerPage = 3;
const router = useRouter(); 

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  return projects.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(projects.length / projectsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
const goToProjectDetail = (id) => {
  router.push({ name: "ProjectDetail", params: { id } });
};
</script>

<template>
  <div class="projects-gallery">
    <h1>Projects Gallery</h1>
    <div class="projects-container">
      <div
        v-for="(project, index) in paginatedProjects"
        :key="index"
        class="project-card"
      >
        <img :src="project.image" :alt="project.title" />
        <h3>{{ project.title }}</h3>
        <strong>Short description:</strong>
        <p class="description">{{ project.description }}</p>
        <strong>Features:</strong>
        <ul>
          <li v-for="(feature, i) in project.features" :key="i">
            {{ feature }}
          </li>
        </ul>
        <button @click="goToProjectDetail(project.id)">Подробнее</button>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span> {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Kalam:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Kalam:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&family=Protest+Strike&display=swap");
.projects-gallery {
  padding: 20px;
  background-color: var(--home-project-background-color);
}

h1 {
  color: var(--home-projects-title-color);
}
.projects-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.project-card {
  width: 350px;
  min-height: 525px;
  background-color: var(--home-card-background-color);
  padding: 20px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  transition: transform 0.7s;
  border: 1px solid var(--home-card-border-color);
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h3 {
  font-family: "Lato", sans-serif;
  color: var(--home-card-text-color);
}

strong {
  display: flex;
  margin-left: 0;
  font-family: "Lato", sans-serif;
  color: var(--home-card-text-color);
}

.description {
  width: 300px;
  margin-top: 20px;
  font-family: "Afacad Flux", sans-serif;
  color: var(--home-card-text-color);
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: disc;
  padding-left: 20px;
  font-family: "Kalam", sans-serif;
}

li {
  margin-bottom: 10px;
  color: var(--home-card-text-color);
}

.project-card:hover {
  transform: translateY(-10px);
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
}

button {
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid var(--button-background-color);
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  font-weight: 700;
  font-family: "Lato", sans-serif;
}

button:hover {
  cursor: pointer;
  background-color: var(--button-text-color);
  color: var(--button-background-color);
  transition: 0.4s;
}

button:active {
  background-color: var(--active-button-background-color);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button {
  background-color: var(--pagination-button-background-color);
  color: var(--pagination-button-text-color);
}
</style>
