import { ZodObject, z } from "zod";

export const user = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(6, { message: "Password must me atleast 6 characters long" })
        .refine((value) => value.trim() === value, {
            message: "Password cannot start or end with whitespace",
        }),
});

export type UserType = z.infer<typeof user>;
