import { defineCollection, z } from 'astro:content';

const sutrasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Auto-generated if not provided
    date: z.date(),
    speaker: z.string(),
    series: z.string().optional(),
    scripture: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    image: z.string().startsWith('/uploads/sutras/').optional(), // Thumbnail
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const authorCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(), // e.g., "Senior Pastor", "Deaconess"
    image: z.string().startsWith('/uploads/author/'),
    bio: z.string().optional(), // Short bio in frontmatter
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(), // Short description for previews
    author: z.string().default("Author"),
    image: z.object({
      url: z.string().startsWith('/uploads/blog/'),
      alt: z.string()
    }).optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  sutras: sutrasCollection,
  author: authorCollection,
  blog: blogCollection,
};
