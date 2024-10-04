import { Router } from "express";
import {
    getAllCompanies,
    getCompaniesByType,
} from "../controllers/companyController";

export const companyRouter: Router = Router();
companyRouter.post("/", getAllCompanies);
companyRouter.post("/:type", getCompaniesByType);
