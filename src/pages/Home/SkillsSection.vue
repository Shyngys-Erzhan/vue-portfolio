<template>
  <div class="skills-section">
    <h2>My skills</h2>
    <div class="skills-container">
      <div v-for="(skill, index) in skills" :key="index" class="skill-item">
        <div class="skill-name">{{ skill.name }}</div>
        <div class="progress-bar">
          <div
            class="progress"
            :style="{
              width: skill.percentage + '%',
              backgroundColor: getColor(skill.percentage),
            }"
          ></div>
        </div>
        <div class="percentage">{{ skill.percentage }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import skillsData from "@/data/skills.json"; 

const skills = ref(skillsData.skills);

const getColor = (percentage) => {
  if (percentage >= 90) return "#28a745"; 
  if (percentage >= 75) return "#ffc107"; 
  return "#dc3545"; 
};
</script>

<style scoped>
.skills-section {
  text-align: center;
  margin: 40px 0;
  padding-left: 20px;
  padding-right: 20px;
}

.skills-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.skill-item {
  width: 45%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.skill-name {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: left;
}

.progress-bar {
  width: 100%;
  background-color: #e0e0e0;
  height: 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s ease;
}

.percentage {
  text-align: right;
  font-weight: bold;
  margin-top: 5px;
}
</style>
