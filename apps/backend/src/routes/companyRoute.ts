import { Router } from "express";
import { handleRequest } from "../hocFunctions/routeRequestHandler";
import {
    getAllCompanies,
    getCompaniesByType,
    postMultipleCompanies,
} from "../controllers/companyController";

export const companyRouter: Router = Router();
companyRouter.get("/", handleRequest(getAllCompanies));
companyRouter.get("/:type", handleRequest(getCompaniesByType));
companyRouter.post("/", handleRequest(postMultipleCompanies));
