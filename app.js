const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
const port = 3000;

// setup parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // false: no nested objects true: nested objects

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// catch all route
app.use((req, res) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});

// callback optional
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
