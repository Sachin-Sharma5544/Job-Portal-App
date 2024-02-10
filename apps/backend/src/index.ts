import { log } from "@repo/logger";
import { connectDatabase } from "@repo/database";
import { createServer } from "./server";

const port = process.env.PORT || 5002;
const server = createServer();
const dbUrl = process.env.MONGO_DB_URL!;

connectDatabase(dbUrl)
    .then(() => {
        log("Database connected successfully");
        server.listen(port, () => {
            log(`api running on ${port}`);
        });
    })
    .catch((error: Error) => {
        log(`Error: ${error.message}`);
    });
