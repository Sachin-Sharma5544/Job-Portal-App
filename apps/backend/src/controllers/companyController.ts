import { type Request, type Response } from "express";
import { CompanyModel } from "../models/companyModel";

export const getAllCompanies = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const companies = await CompanyModel.find({});
        res.status(200).send({ company: companies });
    } catch (error) {
        res.status(200).send({ error });
    }
};

export const getCompaniesByType = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const companies = await CompanyModel.find({});
        res.status(200).send({ company: companies });
    } catch (error) {
        res.status(200).send({ error });
    }
};
