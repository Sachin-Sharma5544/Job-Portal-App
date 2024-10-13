import { mongooseSchema, mongooseModel } from "@repo/database";

const Schema = mongooseSchema();
const model = mongooseModel();

const jobSchema = new Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
});

export const Job = model("Job", jobSchema);
