import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // If deploying to Vercel, base can remain "/".
  // If deploying to GitHub Pages under the repository name
  // support-portfolio-website, change this to "/support-portfolio-website/".
  base: "/",
});
