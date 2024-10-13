import { type Request, type Response } from "express";
import { Job } from "../models/jobsModel";

export const getJobTextSuggestions = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { q } = req.query;

    try {
        const jobs = await Job.find({
            title: { $regex: q, $options: "i" },
        }).limit(10);

        const suggestions = jobs.map((job) => ({ suggestion: job.title }));
        res.status(200).send({ jobs: suggestions });
    } catch (error) {
        res.status(400).send({ error });
    }
};
