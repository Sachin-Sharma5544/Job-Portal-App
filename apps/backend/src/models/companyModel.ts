import { mongooseSchema, mongooseModel } from "@repo/database";

const Schema = mongooseSchema();
const model = mongooseModel();

const companySchema = new Schema({
    companyName: { type: String, required: true },
    companyType: { type: String, required: true },
    industry: { type: String, required: true },
    reviewCount: { type: Number, required: true },
    reviews: { type: Number, required: true },
});
export const CompanyModel = model("Company", companySchema);
