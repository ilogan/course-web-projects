const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
const port = 3000;

// setup parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // false: no nested objects true: nested objects

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
