<script setup>
</script>
<template>
  <div class="content">
    <img src="@/assets/images/profile.jpg" alt="Profile image" />
    <div class="divider"></div>

    <div class="description">
      <h1 class="h1">Shyngys Erzhan</h1>
      <p class="text"><strong>Frontend Developer</strong></p>
      <a href="../../assets/files/Resume.pdf" download class="download-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download CV
      </a>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: 1440px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  background-color: var(--home-profile-background-color);
}
img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
  margin: 0;
}
.divider {
  height: 350px;
  width: 2px;
  background-color: red;
}
.h1 {
  font-size: 45px;
  color: var(--home-profile-text-color);
}
.text {
  font-size: 30px;
  color: var(--home-profile-text-color);
}
.description {
  width: 350px;
}
.download-button {
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 140px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  gap: 5px;
  border-radius: 20px;
  text-decoration: none;
  background-color: var(--home-profile-download-button-background-color);
  transition: transform 0.7s;
}
.icon {
  width: 20px;
  height: 20px;
  align-items: center;
  color: white;
}
.download-button:hover {
  transform: translateY(-3px);
}
</style>