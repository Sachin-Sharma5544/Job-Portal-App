import mongoose, { connect } from "mongoose";
import { config } from "dotenv";
import { log } from "@repo/logger";

config();
const dbUserName = process.env.MONGO_USERNAME!;
const dbPassword = process.env.MONGO_PASSWORD!;

export const connectDatabase = (dbName: string): Promise<typeof mongoose> => {
    log("KKKKKKKK", process.env.MONGO_DB_URL);
    log("db user name>>>>", dbUserName);
    // const url = process.env
    //     .MONGO_DB_URL!.replace("${MONGO_USERNAME}", dbUserName!)
    //     .replace("${MONGO_PASSWORD}", dbPassword!)
    //     .replace("${DB_NAME}", dbName);

    const url = " ";
    return connect(url);
};
