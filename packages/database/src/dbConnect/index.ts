import mongoose, { connect } from "mongoose";

export const connectDatabase = (url: string): Promise<typeof mongoose> => {
    return connect(url);
};
