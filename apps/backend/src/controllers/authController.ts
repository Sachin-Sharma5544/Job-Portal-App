import { type Request, type Response } from "express";
import { type UserType, user } from "@repo/datatypes";
import { genSalt, hash } from "bcrypt";
import { UserModel } from "../models/userModel";
import { log } from "@repo/logger";
import { sign } from "jsonwebtoken";

const createToken = (_id: any) => {
    return sign({ _id }, process.env.JWT_SECRET_KEY!, {
        expiresIn: "3d",
    });
};

export const postLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: UserType = user.parse(req.body);

        //check if user with provided email exists or not
        const userExist = await UserModel.findOne({
            email: userData.email.toLowerCase(),
        });

        //Throwing error when user does not exist in the database
        if (!userExist) {
            throw new Error("User does not exist, please register");
        }

        const token = createToken(userExist._id);

        res.status(200).send({
            email: userData.email,
            token,
        });
    } catch (error) {
        log(error);
    }
};

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
            throw new Error("User already exists with this email");
        }

        //Encrypting Password prior to creating user
        const salt = await genSalt(10);
        const hashPass = await hash(userData.password, salt);

        //Creating user when user doesnot exists in data base
        const createdUser = await UserModel.create({
            email: userData.email.toLowerCase(),
            password: hashPass,
        });

        res.status(201).send({ user: createdUser });
    } catch (error: any) {
        if (error.hasOwnProperty("issues")) {
            res.status(400).send({
                error,
            });
        } else {
            res.status(400).send({
                error: error.message,
            });
        }
    }
};
