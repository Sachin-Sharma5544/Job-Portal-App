import { z } from "zod";

export const jobsSchema = z.object({
    _id: z.string().optional(),
    company: z.string(),
    currency: z.string(),
    description: z.string(),
    experience: z.object({
        min: z.number().min(0),
        max: z.number(),
    }),
    location: z.string(),
    isSaved: z.boolean(),
    salary: z.object({
        min: z.number().min(0),
        max: z.number(),
    }),
    skillsAndTags: z.array(z.string()),
    title: z.string(),
});

export type Jobs = z.infer<typeof jobsSchema>;
