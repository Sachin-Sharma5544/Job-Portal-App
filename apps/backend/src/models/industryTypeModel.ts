import { Schema, model } from "@repo/database";

const industryTypeSchema = new Schema({
    industryType: { type: String, required: true },
    companyCount: { type: Number, required: true },
});

export const IndustryModel = model("Industry Type", industryTypeSchema);
