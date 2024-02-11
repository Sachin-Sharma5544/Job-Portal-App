import { type Request, type Response } from "express";

export const postSignup = (req: Request, res: Response): void => {
    res.status(201).send({ message: "Hello" });
};
