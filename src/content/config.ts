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
const gear = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      category: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          desc: z.string(),
          link: z.string(),
        })
      ),
    })
  ),
});

export const collections = { livingNotebookCollection, gear };
