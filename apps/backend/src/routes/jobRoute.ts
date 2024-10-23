import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import {
    getJobs,
    getJobTextSuggestions,
    postMultipleJobs,
    postSingleJob,
} from "../controllers/jobController";

export const jobRouter = Router();

jobRouter.get("/job-text", handleRequest(getJobTextSuggestions));
jobRouter.get("/get-jobs", handleRequest(getJobs));

jobRouter.post("/", handleRequest(postMultipleJobs));
jobRouter.post("/add-job", handleRequest(postSingleJob));
