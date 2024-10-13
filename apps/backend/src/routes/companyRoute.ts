import { Router } from "express";
import {
    getAllCompanies,
    getCompaniesByType,
} from "../controllers/companyController";

export const companyRouter: Router = Router();
companyRouter.get("/", getAllCompanies);
companyRouter.get("/:type", getCompaniesByType);
