import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      org: z.string().optional(),
      stack: z.string().optional(),
      thumb: image(),
      preview: image(),
      fullPreview: image().optional(),
      featureImage: image().optional(),
      featured: z.boolean().default(false),
      date: z.string().optional(),
      order: z.number().default(0),
      css: z.string().optional(),
      url: z.string().optional(),
      excerpt: z.string().optional(),
      brief: z.string().optional(),
      tools: z.array(z.string()).optional(),
    }),
})

export const collections = { projects }
