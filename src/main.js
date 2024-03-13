import { createApp } from "vue";
import App from "./App.vue";
import Particles from "vue3-particles";

import "./assets/main.css";

createApp(App).mount("#app");
createApp(App).use(Particles);
