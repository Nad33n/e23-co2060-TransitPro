import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
const config = {
  // Plugins used in the project
  plugins: [
    react(), // Enables React fast refresh + JSX support
  ],
};

// Export configuration
export default defineConfig(config);
