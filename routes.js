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
              <h1>Just a user page!</h1>
            </body>
          </html>`
      );
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
  res.end();
};

module.exports = requestHandler;
