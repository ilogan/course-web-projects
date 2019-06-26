const path = require("path");

// main module refers to the main module (type object) that started the application aka app.js
module.exports = path.dirname(process.mainModule.filename);
