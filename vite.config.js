import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,
  },
  plugins: [react(), tailwindcss()]
 
}));
