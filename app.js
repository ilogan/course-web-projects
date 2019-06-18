const express = require("express");

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");

const app = express();
const port = 3000;

// setup parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // false: no nested objects true: nested objects

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// catch all route
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

// callback optional
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
