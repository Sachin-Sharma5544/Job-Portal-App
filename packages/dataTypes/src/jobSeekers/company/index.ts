import { z } from "zod";

export const tagsSchema = z.object({
    businessType: z.string(),
    ownershipType: z.string(),
    employerType: z.string(),
    primaryIndustry: z.string(),
    _id: z.string().optional(),
});

export const companySchema = z.object({
    _id: z.string().optional(),
    name: z.string(),
    logo: z.string(),
    tags: tagsSchema,
    jobs: z.array(z.string()).optional(),
    activeJobsFlag: z.boolean(),
    rating: z.number().min(0).max(5),
    reviewsCount: z.number().int().min(0),
    tagsOrder: z
        .array(
            z.enum([
                "businessType",
                "primaryIndustry",
                "ownershipType",
                "employerType",
            ])
        )
        .optional(),
    __v: z.number().int().optional(),
});

export type Company = z.infer<typeof companySchema>;
export type Tags = z.infer<typeof tagsSchema>;
