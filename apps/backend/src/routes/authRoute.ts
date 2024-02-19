import { Router } from "express";
import { loginPath, signupPath } from "@repo/constants";
import { postLogin, postSignup } from "../controllers/authController";

export const authRouter: Router = Router();

authRouter.post(signupPath, postSignup);
authRouter.post(loginPath, postLogin);
