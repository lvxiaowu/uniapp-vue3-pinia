import { createSSRApp } from "vue";
import App from "./App.vue";
import store from "./stores";

export function createApp() {
  const app = createSSRApp(App).use(store);
  return {
    app,
  };
}
