import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import {
    getJobs,
    getJobsByCompany,
    getJobTextSuggestions,
    postMultipleJobs,
    postSingleJob,
} from "../controllers/jobController";

export const jobRouter = Router();

jobRouter.get("/job-text", handleRequest(getJobTextSuggestions));
jobRouter.get("/", handleRequest(getJobs));
jobRouter.get("/:companyId", handleRequest(getJobsByCompany));

jobRouter.post("/", handleRequest(postMultipleJobs));
jobRouter.post("/add-job", handleRequest(postSingleJob));
