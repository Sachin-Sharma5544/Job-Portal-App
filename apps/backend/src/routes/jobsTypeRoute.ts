import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import { getTrendingJobs } from "../controllers/trendingJobsController";

export const jobsTypesRouter: Router = Router();

jobsTypesRouter.get("/", handleRequest(getTrendingJobs));
