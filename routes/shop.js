const express = require("express");

const router = express.Router();

// get uses exact path matching
router.get("/", (req, res) => {
  res.send(`<a href="/add-product">Product</a>`);
});

module.exports = router;
