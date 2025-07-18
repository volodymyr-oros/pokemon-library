import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // NOTE: Keep these aliases in sync with `tsconfig.app.json` -> compilerOptions.paths.
  // Consider automating this synchronization in the future (e.g. using a script or plugin).
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@layout": path.resolve(__dirname, "./src/layouts"),
      "@layout-type": path.resolve(__dirname, "./src/types/layouts"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@variables": path.resolve(__dirname, "./src/styles/variables"),
      "@mixins": path.resolve(__dirname, "./src/styles/mixins"),
    },
  },
});
