import { type Request, type Response } from "express";
import { IndustryModel } from "../models/industryTypeModel";

export const getIndustryType = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { industryType }: { industryType: string } = req.body;

    try {
        const industryTypeData = await IndustryModel.find({});

        res.status(200).json({
            industryType: industryTypeData,
        });
    } catch (error) {
        res.status(400).json({
            message: "This is get Industry Type function error response",
        });
    }
};
