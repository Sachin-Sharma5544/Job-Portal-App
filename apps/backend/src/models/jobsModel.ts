import { mongooseSchema, mongooseModel } from "@repo/database";

const Schema = mongooseSchema();
const model = mongooseModel();

const jobSchema = new Schema({
    company: { type: Schema.Types.ObjectId, required: true, ref: "Company" },
    currency: { type: String, required: true },
    description: { type: String },
    experience: {
        min: { type: Number, min: 0, required: true },
        max: { type: Number, required: true },
    },
    location: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    isSaved: { type: Boolean, default: false },
    salary: {
        min: { type: Number, min: 0 },
        max: { type: Number },
    },
    skillsAndTags: {
        type: [String],
    },
    title: { type: String, required: true },
});

export const Job = model("Job", jobSchema);
