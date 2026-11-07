import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // If using v4 or standard postcss setup below

export default defineConfig({
  plugins: [react()],
});
