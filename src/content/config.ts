import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Converts date strings safely into JavaScript Date objects
    pubDate: z.coerce.date(), 
    tags: z.array(z.string()).optional(),
  }),
});

// The key here MUST match your folder name inside src/content/
export const collections = {
  'blog': blogCollection,
};
