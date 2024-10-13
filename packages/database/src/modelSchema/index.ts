import mongoose, { Document } from "mongoose";

export const mongooseSchema = (): typeof mongoose.Schema => {
    const Schema = mongoose.Schema;
    return Schema;
};

export const mongooseModel = (): typeof mongoose.model => {
    const Model = mongoose.model;
    return Model;
};

export const typeDocument = (): typeof Document => {
    return Document;
};
