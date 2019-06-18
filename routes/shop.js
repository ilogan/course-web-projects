const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

// get uses exact path matching
router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
