import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/routes/routes";
import {createPinia} from "pinia";
import "@/assets/styles/normalize.css";
import "./style.css"

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
