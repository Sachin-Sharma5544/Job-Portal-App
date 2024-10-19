import { Router } from "express";
import {
    getJobTextSuggestions,
    postMultipleJobs,
} from "../controllers/jobController";

export const jobRouter = Router();
jobRouter.get("/job-text", getJobTextSuggestions);
jobRouter.post("/", postMultipleJobs);
