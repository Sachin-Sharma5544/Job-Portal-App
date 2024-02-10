import mongoose, { connect } from "mongoose";
import { config } from "dotenv";

config();

const dbUserName = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;

export const connectDatabase = (url: string): Promise<typeof mongoose> => {
    return connect(url);
};
