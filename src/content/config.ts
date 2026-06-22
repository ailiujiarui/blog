import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // 可选的封面图（放在文章同目录引用）
      heroImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
