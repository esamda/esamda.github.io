import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import markdownIntegration from "@astropub/md";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:4321/",
    base: "/",
    integrations: [tailwind(), mdx(), icon(), pagefind(), markdownIntegration()],
});
