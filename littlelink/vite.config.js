import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "littlelink";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isPagesBuild && repoName ? `/${repoName}/socials/` : "/",
  plugins: [react()],
});
