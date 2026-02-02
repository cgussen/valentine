import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ fasho
export default defineConfig({
  base: "/valentine",
  plugins: [react()],
});
