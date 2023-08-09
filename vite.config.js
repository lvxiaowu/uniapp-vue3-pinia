import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";
import { resolve } from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [uni(), Unocss()],
});
