import { Router } from "express";
import { getJobTextSuggestions } from "../controllers/jobController";

export const jobRouter = Router();
jobRouter.get("/job-text", getJobTextSuggestions);
