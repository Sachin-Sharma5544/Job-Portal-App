import { Router } from "express";
import { postSignup } from "../controllers/authController";

export const authRouter: Router = Router();

authRouter.post("/", postSignup);
