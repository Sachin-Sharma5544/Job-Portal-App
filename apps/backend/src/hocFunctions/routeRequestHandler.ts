import { type Request, type Response } from "express";

export const handleRequest = (
    cb: (req: Request, res: Response) => Promise<void>
) => {
    return (req: Request, res: Response) => {
        void cb(req, res);
    };
};
