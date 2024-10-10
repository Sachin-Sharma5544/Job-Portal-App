import { mongooseSchema, mongooseModel } from "@repo/database";

const Schema = mongooseSchema();
const model = mongooseModel();

const trendingJobsSchema = new Schema({
    jobName: { type: String, required: true },
});

export const TrendingJobs = model("Trending Jobs", trendingJobsSchema);
