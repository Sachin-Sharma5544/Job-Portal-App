import { log } from "@repo/logger";
import { connectDatabase } from "@repo/database";
import { type Request, type Response } from "express";
import { NAVIGATION_PATHS, PORT } from "@repo/constants";
import { authRouter } from "./routes/authRoute";
import { createServer } from "./server";
import { industryTypeRouter } from "./routes/industryTypeRoute";
import { jobsTypesRouter } from "./routes/jobsTypeRoute";
import { companyRouter } from "./routes/companyRoute";
import { jobRouter } from "./routes/jobRoute";

const server = createServer();
const dbName = process.env.DB_NAME!;

const url = process.env
    .MONGO_DB_URL!.replace("${MONGO_USERNAME}", process.env.MONGO_USERNAME!)
    .replace("${MONGO_PASSWORD}", process.env.MONGO_PASSWORD!)
    .replace("${DB_NAME}", process.env.DB_NAME!);

server.use(`${NAVIGATION_PATHS.api}${NAVIGATION_PATHS.auth}`, authRouter);
server.use(
    `${NAVIGATION_PATHS.api}${NAVIGATION_PATHS.industryType}`,
    industryTypeRouter
);
server.use(
    `${NAVIGATION_PATHS.api}${NAVIGATION_PATHS.jobsType}`,
    jobsTypesRouter
);
server.use(
    `${NAVIGATION_PATHS.api}${NAVIGATION_PATHS.companies}`,
    companyRouter
);
server.use(`${NAVIGATION_PATHS.api}${NAVIGATION_PATHS.jobs}`, jobRouter);

//Handling invalid path requests
server.use("*", (req: Request, res: Response) => {
    res.status(422).send({ message: "Path not found" });
});

connectDatabase(url)
    .then(() => {
        log("Database connected successfully");
        server.listen(5004, () => {
            log(`Server started on ${PORT}`);
        });
    })
    .catch((error: Error) => {
        log(`Error: ${error.message}`);
    });
