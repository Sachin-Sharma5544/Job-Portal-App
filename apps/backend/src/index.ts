import { log } from "@repo/logger";
import { connectDatabase } from "@repo/database";
import { type Request, type Response } from "express";
import { API, AUTH } from "@repo/constants";
import { authRouter } from "./routes/authRoute";
import { createServer } from "./server";
import { industryTypeRouter } from "./routes/industryTypeRoute";
import { trendingJobsRouter } from "./routes/trendingJobsRoute";

const port = 5002;
const server = createServer();
const dbName = process.env.DB_NAME!;

const url = process.env
    .MONGO_DB_URL!.replace("${MONGO_USERNAME}", process.env.MONGO_USERNAME!)
    .replace("${MONGO_PASSWORD}", process.env.MONGO_PASSWORD!)
    .replace("${DB_NAME}", process.env.DB_NAME!);

server.use(`${API}${AUTH}`, authRouter);
server.use(`${API}/industry-type`, industryTypeRouter);
server.use(`${API}/trending-jobs`, trendingJobsRouter);
//Handling invalid path requests
server.use("*", (req: Request, res: Response) => {
    res.status(422).send({ message: "Path not found" });
});

connectDatabase(url)
    .then(() => {
        log("Database connected successfully");
        server.listen(port, () => {
            log(`Server started on ${port}`);
        });
    })
    .catch((error: Error) => {
        log(`Error: ${error.message}`);
    });
