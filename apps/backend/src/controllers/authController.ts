import { type Request, type Response } from "express";
import { type UserType, user } from "@repo/datatypes";
import { UserModel } from "../models/userModel";

export const postSignup = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const userData: UserType = user.parse(req.body); //user is zod object defined in schema

        //check if user with provided email exists or not
        const newUser = await UserModel.findOne({
            email: userData.email.toLowerCase(),
        });

        //Throwing error when user already exists in the database
        if (newUser) {
            throw new Error("User already exists with the email");
        }

        //Creating user when user doesnot exists in data base
        const createdUser = await UserModel.create({
            email: userData.email.toLowerCase(),
            password: userData.password,
        });
        res.status(201).send({ user: createdUser });
    } catch (error: any) {
        res.status(400).send({ error: error });
    }
};
