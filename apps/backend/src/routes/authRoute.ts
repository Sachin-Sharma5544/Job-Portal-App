import { Router, type Request, type Response } from "express";
import { postSignup } from "../controllers/authController";

export const authRouter: Router = Router();

authRouter.post("/", (req: Request, res: Response) => {
    res.status(201).send({ message: "Hello" });
});
