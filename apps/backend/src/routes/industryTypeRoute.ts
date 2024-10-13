import { Router } from "express";
import { getIndustryType } from "../controllers/industryTypeController";

export const industryTypeRouter: Router = Router();
industryTypeRouter.get("/", getIndustryType);
