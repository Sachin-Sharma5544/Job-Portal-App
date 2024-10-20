import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import { getIndustryType } from "../controllers/industryTypeController";

export const industryTypeRouter: Router = Router();
industryTypeRouter.get("/", handleRequest(getIndustryType));
