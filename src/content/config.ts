import { defineCollection, z } from "astro:content";

function removeDoubleSlashes(link: string): string {
    return link.replace(/\/\/+/g, "/");
}

function isUrl(str: string): boolean {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}

const articles = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        cover_image: z.preprocess((i) => {
            const input = String(i);
            if (!isUrl(input)) {
                return removeDoubleSlashes(`${import.meta.env.BASE_URL}/${input}`);
            }
            return input;
        }, z.string()),
    }),
});

export const collections = { articles };
