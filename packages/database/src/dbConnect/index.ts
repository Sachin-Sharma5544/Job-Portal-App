import mongoose, { connect } from "mongoose";
import { config } from "dotenv";

config();

const dbUserName = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;
let url = process.env
    .MONGO_DB_URL!.replace("${MONGO_USERNAME}", dbUserName!)
    .replace("${MONGO_PASSWORD}", dbPassword!);

export const connectDatabase = (dbName: string): Promise<typeof mongoose> => {
    url = url.replace("${DB_NAME}", dbName);
    return connect(url);
};
