import { z } from "zod";

export const jobsSchema = z.object({
    _id: z.string().optional(),
    title: z.string(),
    company: z.string(),
    currency: z.string(),
    placeholders: z
        .array(z.object({ name: z.string(), label: z.string() }))
        .length(3),
    isSaved: z.boolean(),
    description: z.string(),
    skillsAndTags: z.array(z.string()),
});

export type Jobs = z.infer<typeof jobsSchema>;
