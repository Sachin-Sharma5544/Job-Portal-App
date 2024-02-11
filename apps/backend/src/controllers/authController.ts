import { type Request, type Response } from "express";
import { type UserType, user } from "@repo/datatypes";

export const postSignup = (req: Request, res: Response): void => {
    try {
        const userData: UserType = user.parse(req.body);
        res.status(201).send({ user: userData });
    } catch (error: any) {
        res.status(400).send({ error: error.errors[0].message });
    }
};
