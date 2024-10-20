import { Router } from "express";
import { loginPath, signupPath } from "@repo/constants";
import { postLogin, postSignup } from "../controllers/authController";
import { handleRequest } from "../hocFunctions/routeRequestHandler";

export const authRouter: Router = Router();
authRouter.post(loginPath, handleRequest(postLogin));
authRouter.post(signupPath, handleRequest(postSignup));
