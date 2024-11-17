import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

// console.log("GLSL Plugin Loaded"); // Add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl({
      include: "**/*.glsl",
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
});
