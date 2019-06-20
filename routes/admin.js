const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.render("add-product");
});

// admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = {
  router,
  products
};
