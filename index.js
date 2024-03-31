import { SERVER_PORT } from "./src/config/env.js";
import server from "./src/server.js";

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
