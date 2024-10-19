import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Resume from "@/pages/Resume/Resume.vue";
import About from "@/pages/About/About.vue";
import Contact from "@/pages/Contact/Contact.vue";
import Projects from "@/pages/Project/Projects.vue";
import ProjectDetail from "@/pages/Project/ProjectDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/project/:id",
    name: "ProjectDetail",
    component: ProjectDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
