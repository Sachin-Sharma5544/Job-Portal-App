import { Schema, model } from "@repo/database";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isEmployer: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

export const UserModel = model("User", userSchema);
