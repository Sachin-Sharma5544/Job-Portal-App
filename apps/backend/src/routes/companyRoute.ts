import { Router } from "express";
import {
    getAllCompanies,
    getCompaniesByType,
    postMultipleCompanies,
} from "../controllers/companyController";

export const companyRouter: Router = Router();
companyRouter.get("/", getAllCompanies);
companyRouter.get("/:type", getCompaniesByType);
companyRouter.post("/", postMultipleCompanies);
