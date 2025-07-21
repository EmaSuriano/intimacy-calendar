import { defineCollection, z } from 'astro:content';

const daysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    day: z.number(),
    title: z.string(),
    timeRequired: z.string(),
    when: z.string(),
    task: z.string(),
    success: z.string(),
    steps: z.array(z.string()).optional(),
    examples: z.array(z.string()).optional(),
    rules: z.array(z.string()).optional(),
    questions: z.array(z.string()).optional(),
    activities: z.array(z.string()).optional(),
    ideas: z.array(z.string()).optional(),
  })
});

export const collections = {
  'days': daysCollection,
};