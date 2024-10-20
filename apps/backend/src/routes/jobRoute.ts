import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import {
    getJobs,
    getJobTextSuggestions,
    postMultipleJobs,
} from "../controllers/jobController";

export const jobRouter = Router();

jobRouter.get("/job-text", handleRequest(getJobTextSuggestions));
jobRouter.post("/", handleRequest(postMultipleJobs));
jobRouter.get("/get-jobs", handleRequest(getJobs));
