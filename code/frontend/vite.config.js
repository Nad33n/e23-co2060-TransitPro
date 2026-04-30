import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,        // same default, just explicit
    open: true,        // auto open browser (optional UX improvement)
  },

  preview: {
    port: 5173,
  },

  build: {
    outDir: "dist",    // default, but explicit for clarity
  },
});
