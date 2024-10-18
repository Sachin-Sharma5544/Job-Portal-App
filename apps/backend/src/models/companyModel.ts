import { mongooseSchema, mongooseModel } from "@repo/database";

const Schema = mongooseSchema();
const model = mongooseModel();

const companySchema = new Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true },
    tags: {
        type: new Schema({
            businessType: { type: String, required: true },
            ownershipType: { type: String, required: true },
            employerType: { type: String, required: true },
            primaryIndustry: { type: String, required: true },
        }),
        required: true,
    },
    jobs: { type: [Schema.Types.ObjectId], ref: "Job" },
    activeJobsFlag: { type: Boolean },
    rating: { type: Number },
    reviewsCount: { type: Number },
    tagsOrder: {
        type: [String],
        enum: [
            "businessType",
            "primaryIndustry",
            "ownershipType",
            "employerType",
        ],
        default: [
            "businessType",
            "primaryIndustry",
            "ownershipType",
            "employerType",
        ],
    },
});

export const CompanyModel = model("Company", companySchema);
