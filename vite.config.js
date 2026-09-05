import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
  plugins: [
    laravel({
      input: ["src/styles.css"],
      refresh: true,
    }),
  ],
});
