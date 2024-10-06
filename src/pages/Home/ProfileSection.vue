<script setup>
</script>
<template>
  <div class="content">
    <img src="@/assets/images/profile.jpg" alt="Profile image" />
    <div class="divider"></div>

    <div class="description">
      <h1>Shyngys Erzhan</h1>
      <p>afsnkjasnd</p>
      <button>mfdskl</button>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px auto;
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
.description {
  width: 350px;
}
</style>