import { defineCollection, z } from "astro:content";
import { formatPathOrUrl } from "../utilities";

const articles = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        cover_image: z.preprocess((i) => formatPathOrUrl(import.meta.env.BASE_URL, String(i)), z.string()),
    }),
});

export const collections = { articles };
