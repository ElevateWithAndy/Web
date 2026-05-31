import { defineCollection, z } from 'astro:content';

const livingNotebookCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Converts date strings safely into JavaScript Date objects
    pubDate: z.coerce.date(), 
    tags: z.array(z.string()).optional(),
  }),
});
// 🌟 ADD THIS: Define the JSON Schema for your Gear Items
const gear = defineCollection({
  type: 'data', // 'data' tells Astro this is a JSON/YAML file, not markdown
  schema: z.object({
    category: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        desc: z.string(),
        asin: z.string(),
      })
    ),
  }),
});

export const collections = { livingNotebookCollection, gear };
