import { defineStore } from "pinia";
import themes from "@/data/themes.json";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: localStorage.getItem("theme") || "black-and-white",
  }),
  actions: {
    setTheme(themeName) {
      this.currentTheme = themeName;
      const theme = themes[themeName];
      if (theme) {
        Object.keys(theme).forEach((key) => {
          document.documentElement.style.setProperty(key, theme[key]);
        });
        localStorage.setItem("theme", themeName);
      }
    },
    initTheme() {
      this.setTheme(this.currentTheme);
    },
  },
});
