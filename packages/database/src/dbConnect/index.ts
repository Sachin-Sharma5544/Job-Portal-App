import mongoose, { connect } from "mongoose";
import { config } from "dotenv";

config();

const dbUserName = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;

export const connectDatabase = (dbName: string): Promise<typeof mongoose> => {
    const url = process.env
        .MONGO_DB_URL!.replace("${MONGO_USERNAME}", dbUserName!)
        .replace("${MONGO_PASSWORD}", dbPassword!)
        .replace("${DB_NAME}", dbName);
    return connect(url);
};
