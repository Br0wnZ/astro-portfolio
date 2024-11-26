import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  compressHTML: true,
  output: "hybrid",
  adapter: vercel(),
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern", // Use the modern API
      },
    },
  },
});
