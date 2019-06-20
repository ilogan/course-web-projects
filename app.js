const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");

const app = express();
const port = 3000;

// setup parsing
app.use(express.json()); // parses incoming json requests
app.use(express.urlencoded({ extended: false })); // false: no nested objects true: nested objects | parses form data
app.use(express.static(path.join(__dirname, "public"))); // allows access to static files in public dir

app.set("view engine", "pug");

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

// catch all route
app.use((req, res) => {
  res.status(404).render("404");
});

// callback optional
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
