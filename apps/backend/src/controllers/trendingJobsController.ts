import { type Request, type Response } from "express";
import { TrendingJobs } from "../models/trendingJobsModel";

export const getTrendingJobs = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const trendingJobs = await TrendingJobs.find({});
        res.status(201).send({ trendingJobs });
    } catch (error) {
        res.status(400).send({ error });
    }
};
