import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import { getTrendingJobs } from "../controllers/trendingJobsController";

export const jobTypesRouter: Router = Router();

jobTypesRouter.get("/", handleRequest(getTrendingJobs));
