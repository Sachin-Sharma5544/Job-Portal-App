import { Router } from "express";
import { postLogin, postSignup } from "../controllers/authController";

export const authRouter: Router = Router();

authRouter.post("/", postSignup);
authRouter.post("/", postLogin);
