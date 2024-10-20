import { z } from "zod";

//Jobs Schema
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

//Jobs type schema
export const jobsType = z.object({
    _id: z.string(),
    jobName: z.string(),
});

export type JobsType = z.infer<typeof jobsType>;
