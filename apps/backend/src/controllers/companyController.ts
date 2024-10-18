import { type Request, type Response } from "express";
import { CompanyModel } from "../models/companyModel";

export const getAllCompanies = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const companies = await CompanyModel.find({});
        console.log("Companies List", companies);
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
                { companyType: { $regex: new RegExp(type, "i") } },
                { industry: { $regex: new RegExp(type, "i") } },
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
