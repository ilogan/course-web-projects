const http = require("http");

const route = require("./routes");

const server = http.createServer(route);

// appears on localhost:3000
server.listen(3000);
