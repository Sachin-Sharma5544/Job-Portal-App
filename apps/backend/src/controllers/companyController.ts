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
        const { type } = req.params;

        const companies = await CompanyModel.find({
            $or: [
                { "tags.businessType": { $regex: new RegExp(type, "i") } },
                { "tags.ownershipType": { $regex: new RegExp(type, "i") } },
                { "tags.employerType": { $regex: new RegExp(type, "i") } },
                { "tags.primaryIndustry": { $regex: new RegExp(type, "i") } },
            ],
        });
        res.status(200).send({ company: companies });
    } catch (error) {
        res.status(400).send({ error });
    }
};

export const postMultipleCompanies = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { data } = req.body;
    try {
        const companies = await CompanyModel.insertMany(data);
        res.status(200).send({ companies });
    } catch (error) {
        res.status(200).send({ error });
    }
};
