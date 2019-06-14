const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(req.url, "\n", req.method, "\n", req.headers);
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  const method = req.method;

  // displays form if user at root
  if (url === "/") {
    res.write(
      `<html>
        <head>
          <form action="/message" method="POST">
            <input type="text" value="Default1" name="input_1"/>
            <input type="text" value="Default2" name="input_2"/>
            <button type="submit">Send</button>
          </form>
        </body>
      </html>`
    );
    // app will crash if we send more data after res.end() called
    return res.end();
  }

  // write file txt and redirect user back to root if user submits form
  if (url === "/message" && method === "POST") {
    const body = [];

    // only registers function
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    // return necessary to call registered function and keep from
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("&");
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        // return necessary?
        return res.end();
      });
    });
  }

  // display on every other page
  res.write(
    `<html>
      <head>
        <title>Node Server</title>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
      </body>
    </html>`
  );
  res.end();
});

// appears on localhost:3000
server.listen(3000);
