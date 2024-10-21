import { type Request, type Response } from "express";
import { type Jobs } from "@repo/datatypes";
import { Job } from "../models/jobsModel";
import { CompanyModel } from "../models/companyModel";

export const getJobTextSuggestions = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { q } = req.query;

    try {
        const jobs = await Job.find({
            title: { $regex: q, $options: "i" },
        }).limit(10);

        const suggestions = jobs.map((job) => ({ suggestion: job.title }));
        res.status(200).send({ jobs: suggestions });
    } catch (error) {
        res.status(400).send({ error });
    }
};

export const getJobs = async (req: Request, res: Response): Promise<void> => {
    const jobType = req.query.jobType || "";

    try {
        const jobs = await Job.aggregate([
            {
                $lookup: {
                    from: "companies", // Collection name for companies
                    localField: "company",
                    foreignField: "_id",
                    as: "companyDetails",
                },
            },
            {
                $unwind: "$companyDetails", // Unwind the joined company details
            },
            {
                $match: {
                    "companyDetails.tags.businessType": {
                        $regex: jobType,
                        $options: "i",
                    },
                },
            },
            {
                $project: {
                    // Include fields you need in the final result
                    title: 1,
                    description: 1,
                    location: 1,
                    salary: 1,
                    skillsAndTags: 1,

                    //company fields
                    company: {
                        _id: "$companyDetails._id",
                        name: "$companyDetails.name",
                        tags: "$companyDetails.tags",
                        rating: "$companyDetails.rating",
                        reviewsCount: "$companyDetails.reviewsCount",
                    },
                },
            },
        ]);

        res.status(200).send({ jobs });
    } catch (error) {
        res.status(400).send({ error });
    }
};

export const postMultipleJobs = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { data }: { data: Jobs[] } = req.body;

    try {
        //adding jobs to database
        const jobs = await Job.insertMany(data);

        //Updating company jobs
        await Promise.all(
            jobs.map((job) =>
                CompanyModel.findByIdAndUpdate(job.company, {
                    $push: { jobs: job._id },
                })
            )
        );

        res.status(200).send({ jobs });
    } catch (error) {
        res.status(200).send({ error });
    }
};
