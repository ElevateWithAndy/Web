import { defineCollection, z } from 'astro:content';

const livingNotebookCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), 
    tags: z.array(z.string()).optional(),
    layoutType: z.enum(['elevate', 'dnd']).optional().default('elevate'),
  }),
});
const gear = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      category: z.string(),
      items: z.array(
        z.object({
          link: z.string(),
          name: z.string(),
          desc: z.string(),
          img: z.string(),
        })
      ),
    })
  ),
});

// 3. The new modular Home Page data collection
const home = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      headingLine1: z.string(),
      headingLine2: z.string(),
      body: z.string(),
    }),
    foundations: z.object({
      heading: z.string(),
      pillars: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
  }),
});

// 4. Export all collections together matching your original syntax style
export const collections = { livingNotebookCollection, gear, home };
