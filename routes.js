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
