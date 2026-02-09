import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { applyThemeOnLoad } from './composables/useTheme'

import "@/assets/main.css";

applyThemeOnLoad();

createApp(App).use(router).mount('#app')
