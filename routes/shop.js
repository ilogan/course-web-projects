const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

// get uses exact path matching
router.get("/", (req, res) => {
  const products = adminData.products;
  console.log(adminData.products);
  res.render("shop", {
    products,
    docTitle: "Shop"
  });
});

module.exports = router;
