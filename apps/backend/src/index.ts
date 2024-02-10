import { log } from "@repo/logger";
import { connectDatabase } from "@repo/database";
import { createServer } from "./server";

const port = 5002;
const server = createServer();
const dbName = process.env.DB_NAME!;

const url = process.env
    .MONGO_DB_URL!.replace("${MONGO_USERNAME}", process.env.MONGO_USERNAME!)
    .replace("${MONGO_PASSWORD}", process.env.MONGO_PASSWORD!)
    .replace("${DB_NAME}", process.env.DB_NAME!);

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
