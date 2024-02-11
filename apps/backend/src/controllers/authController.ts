import { type Request, type Response } from "express";
import { type UserType, user } from "@repo/datatypes";
import { UserModel } from "../models/userModel";

export const postSignup = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const userData: UserType = user.parse(req.body);

        const newUser = await UserModel.findOne({ email: userData.email });
        if (newUser) {
            throw new Error("User already exists with the email");
        }
        const createdUser = await UserModel.create({
            email: userData.email,
            password: userData.password,
        });
        res.status(201).send({ user: createdUser });
    } catch (error: any) {
        res.status(400).send({ error: error });
    }
};
