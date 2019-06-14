const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const { url, method } = req;

  switch (url) {
    case "/": {
      res.write(
        `<html>
            <head>
              <title>Users</title>
            </head>
            <body>
              <h1>Hello there!</h1>
              <p>This is the main page</p>
              <form action="/create-user" method="POST">
                <input type="text" name="username" />
                <button type="submit">Submit</button>
              </form>
            </body>
          </html>`
      );
      break;
    }
    case "/users": {
      res.write(
        `<html>
            <head>
              <title>Users</title>
            </head>
            <body>
              <ul>
                <li>Billy</li>
                <li>Jack</li>
                <li>Jessica</li>
              </ul>
            </body>
          </html>`
      );
      break;
    }

    case "/create-user": {
      res.write(
        `<html>
            <head>
              <title>Users</title>
            </head>
            <body>
              <h1>User creation page!</h1>`
      );
      if (method === "POST") {
        const body = [];
        req.on("data", chunk => {
          body.push(chunk);
        });

        return req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody);
          const user = parsedBody.split("=")[1];
          res.write(`
            <p>Welcome ${user}!</p></body></html>
          `);
          res.end();
        });
      }
      res.write(`</body></html>`);
      break;
    }

    default: {
      res.write(
        `<html>
          <head>
            <title>Users</title>
          </head>
          <body>
            <h1>Default Page!</h1>
          </body>
        </html>`
      );
    }
  }
  console.log("exited switch");
  console.log(req.url);
  res.end();
};

module.exports = requestHandler;
