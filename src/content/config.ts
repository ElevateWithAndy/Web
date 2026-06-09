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
          number: z.string(),
          title: z.string(),
          descPart1: z.string(),
          hasEmphasis: z.boolean(),
          emphasisText: z.string(),
          descPart2: z.string(),
        })
      ),
    }),
    videoHub: z.object({
      heading: z.string(),
      body: z.string(),
    }),
  }),
});
