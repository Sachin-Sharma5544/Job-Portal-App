import { Router, type Request, type Response } from "express";
import { UserType, user } from "@repo/datatypes";
import { log } from "@repo/logger";
import { postSignup } from "../controllers/authController";

export const authRouter: Router = Router();

authRouter.post("/", (req: Request, res: Response) => {
    try {
        const userData: UserType = user.parse(req.body);
        res.status(201).send({ user: userData });
    } catch (error: any) {
        log(error, ">>>>>>");
        res.status(400).send({ error: error.errors[0].message });
    }
});
