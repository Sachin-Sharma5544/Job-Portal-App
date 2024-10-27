import { Router } from "express";
import { NAVIGATION_PATHS } from "@repo/constants";
import { postLogin, postSignup } from "../controllers/authController";
import { handleRequest } from "../hocFunctions/routeRequestHandler";

export const authRouter: Router = Router();
authRouter.post(NAVIGATION_PATHS.login, handleRequest(postLogin));
authRouter.post(NAVIGATION_PATHS.signup, handleRequest(postSignup));
