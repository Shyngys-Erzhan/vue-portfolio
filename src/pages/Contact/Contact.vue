<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    
    <Header />

    <section class="contact-section">
      <h2>Контактная страница</h2>
      <div class="contact-form-container">
        <form class="contact-form">
          <div class="form-row">
            <input type="text" placeholder="Полное имя" />
            <input type="email" placeholder="Электронная почта" />
          </div>
          <div class="form-row">
            <input type="text" placeholder="Номер телефона" />
            <input type="text" placeholder="Тема" />
          </div>
          <textarea placeholder="Введите сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>

    <section class="map-section">
      <h2>Найдите нас на карте</h2>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23256.569284180387!2d76.85751417800093!3d43.22896766246376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369bf309e11e1%3A0x4b21f06b87d2e844!2sGrand%20Park!5e0!3m2!1sru!2skz!4v1729376411761!5m2!1sru!2skz"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.contact-section {
  text-align: center;
  padding: 20px;
  background-color: #005691;
}

h2 {
  font-size: 36px;
  color: #f1f1f1;
}

.contact-form-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
  max-width: 600px;
}

.form-row {
  display: flex;
  gap: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #005691;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #003f73;
}

.map-section {
  padding: 20px;
  background-color: #a8dadc;
}

.map-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
