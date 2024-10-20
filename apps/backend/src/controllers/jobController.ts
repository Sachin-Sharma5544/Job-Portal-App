import { type Request, type Response } from "express";
import { type Jobs } from "@repo/datatypes";
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

export const getJobs = async (req: Request, res: Response): Promise<void> => {
    const { jobType } = req.params;
    try {
        // const jobs = await Job.find({
        //     title: { $regex: q, $options: "i" },
        // }).limit(10);

        // const suggestions = jobs.map((job) => ({
        //     suggestion: "Test successful",
        // }));
        res.status(200).send({ jobs: "Test successful" });
    } catch (error) {
        res.status(400).send({ error: "Test failed" });
    }
};

export const postMultipleJobs = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { data }: { data: Jobs[] } = req.body;

    try {
        const jobs = await Job.insertMany(data);
        res.status(200).send({ jobs });
    } catch (error) {
        res.status(200).send({ error });
    }
};
