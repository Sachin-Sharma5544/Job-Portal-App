import { log } from "@repo/logger";
import { connectDatabase } from "@repo/database";
import { createServer } from "./server";

const port = process.env.PORT || 5002;
const server = createServer();
const dbName = process.env.DB_NAME!;

connectDatabase(dbName)
    .then(() => {
        log("Database connected successfully");
        server.listen(port, () => {
            log(`api running on ${port}`);
        });
    })
    .catch((error: Error) => {
        log(`Error: ${error.message}`);
    });
