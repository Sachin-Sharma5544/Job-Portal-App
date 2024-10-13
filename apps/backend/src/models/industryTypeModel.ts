import { mongooseSchema, mongooseModel } from "@repo/database";

const Schema = mongooseSchema();
const model = mongooseModel();

const industryTypeSchema = new Schema({
    industryType: { type: String, required: true },
    companyCount: { type: Number, required: true },
});

export const IndustryModel = model("Industry Type", industryTypeSchema);
