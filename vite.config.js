import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  root: "src",
  server: {
    host: true,
    port: 3000,
  },
});
