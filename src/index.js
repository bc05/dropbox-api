import "@babel/polyfill";

import server from "./server";

const port = process.env.PORT || 3000;

server.server.listen(port, console.log(`Server listening on port ${port}`));