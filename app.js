const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  res.send("<h1>Task 2</h1>");
});

/* equiv to:
const server = http.createServer(app)
server.listen()
*/
app.listen(3000);
