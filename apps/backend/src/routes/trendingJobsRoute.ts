import { Router } from "express";
import { getTrendingJobs } from "../controllers/trendingJobsController";

export const trendingJobsRouter: Router = Router();

trendingJobsRouter.get("/", getTrendingJobs);
