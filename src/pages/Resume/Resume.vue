<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const resumeData = {
  name: "Shyngys Erzhan",
  position: "Front-end Junior Developer",
  location: "Almaty, Kazakhstan",
  phone: "+7-708-848-85-90",
  email: "shyngyserzhan200505@gmail.com",
  github: "https://github.com/Shyngys-Erzhan",
  linkedin: "https://linkedin.com/in/shyngys-erzhan",
  education: "Qamalladin University",
  about: `Меня зовут Шыңғыс. Начал увлекаться фронтендом еще с 11 класса и успел уже получить коммерческий опыт. На данный момент активно изучаю Vue.js`,
  experience: [
    {
      company: "TOO IT Dev, Almaty",
      role: "Frontend Developer (Junior)",
      period: "June 2024 – September 2024",
      details: [
        "Связал Telegram-бота с веб-сайтом используя WebSocket для автоматического получения сообщений и заполнения полей формы.",
        "Внедрил фильтрацию и сортировку данных в таблицах.",
        "Создавал отдельные компоненты для работы с REST API.",
        "Работал с формами для ввода данных, таких как ИИН.",
      ],
    },
    {
      company: "Oris Lab, Almaty",
      role: "Frontend Developer (Intern)",
      period: "January 2024 – April 2024",
      details: [
        "Разработал интерфейс для отображения баланса кошелька и управления токенами с использованием React и Redux.",
        "Интегрировал механизмы для повышения безопасности пользовательских данных.",
      ],
    },
    {
      company: "TechCulture, Almaty",
      role: "Frontend Developer (Intern)",
      period: "April 2024 – May 2024",
      details: [
        "Реализовал форму регистрации с валидацией данных с помощью MobX и React.",
        "Настроил взаимодействие Tonkeeper с веб-приложением для аутентификации.",
      ],
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "SCSS",
    "REST API",
    "Ant Design",
    "MobX",
  ],
  languages: ["Казахский (Родной)", "Русский (Свободно)", "Английский (A2)"],
};
</script>

<template>
  <Header />
  <div class="resume-container">
    <header class="resume-header">
      <h1>{{ resumeData.name }}</h1>
      <p>{{ resumeData.position }}</p>
      <div class="contact-info">
        <p>{{ resumeData.location }}</p>
        <p>
          <a :href="'mailto:' + resumeData.email">{{ resumeData.email }}</a>
        </p>
        <p><a :href="resumeData.github" target="_blank">GitHub</a></p>
        <p><a :href="resumeData.linkedin" target="_blank">LinkedIn</a></p>
      </div>
    </header>

    <section class="resume-section">
      <h2>Образование</h2>
      <p>{{ resumeData.education }}</p>
    </section>

    <section class="resume-section">
      <h2>О себе</h2>
      <p>{{ resumeData.about }}</p>
    </section>

    <section class="resume-section">
      <h2>Опыт работы</h2>
      <div v-for="job in resumeData.experience" :key="job.company" class="job">
        <h3>{{ job.company }}</h3>
        <p>
          <strong>{{ job.role }} ({{ job.period }})</strong>
        </p>
        <ul>
          <li v-for="detail in job.details" :key="detail">{{ detail }}</li>
        </ul>
      </div>
    </section>

    <section class="resume-section">
      <h2>Навыки</h2>
      <ul class="skills">
        <li v-for="skill in resumeData.skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>

    <section class="resume-section">
      <h2>Языки</h2>
      <ul class="languages">
        <li v-for="language in resumeData.languages" :key="language">
          {{ language }}
        </li>
      </ul>
    </section>
  </div>
  <Footer />
</template>

<style scoped>
.resume-container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resume-header {
  text-align: center;
  border-bottom: 2px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.resume-header h1 {
  margin-bottom: 10px;
  font-size: 32px;
}

.resume-header p {
  font-size: 18px;
  color: #555;
}

.contact-info p,
.contact-info a {
  font-size: 14px;
  color: #777;
}

.resume-section {
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.job {
  margin-bottom: 20px;
}

ul {
  padding-left: 20px;
}

.skills,
.languages {
  display: flex;
  flex-wrap: wrap;
}

.skills li,
.languages li {
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #e3f2fd;
  border-radius: 4px;
}
</style>
