import { Schema, model } from "@repo/database";

const companySchema = new Schema({
    companyName: { type: String, required: true },
    companyType: { type: String, required: true },
    industry: { type: String, required: true },
    reviewCount: { type: Number, required: true },
    reviews: { type: Number, required: true },
});
export const CompanyModel = model("Company", companySchema);
