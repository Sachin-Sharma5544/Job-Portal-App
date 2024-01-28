import { log } from "@repo/logger";
import { createServer } from "./server";

const port = process.env.PORT || 5002;
const server = createServer();

server.listen(port, () => {
    log(`api running on ${port}`);
});
