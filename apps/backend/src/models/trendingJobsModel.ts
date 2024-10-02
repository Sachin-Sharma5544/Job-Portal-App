import { model, Schema } from "@repo/database";

const trendingJobsSchema = new Schema({
    jobName: { type: String, required: true },
});

export const TrendingJobs = model("Trending Jobs", trendingJobsSchema);
