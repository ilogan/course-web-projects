const express = require("express");

const app = express();

/* equiv to:
const server = http.createServer(app)
server.listen()
*/
app.listen(3000);
