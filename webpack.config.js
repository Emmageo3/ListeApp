const path = require("path");

module.exports = {
    entry: "app.js",

    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
    }
}