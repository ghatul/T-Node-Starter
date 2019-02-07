"use strict";
exports.__esModule = true;
var express_1 = require("express");
// Create a new express application instance
var app = express_1["default"]();
app.get("gk", function (req, res) {
    res.status(200).send({ status: "success" });
});
app.listen(8080, function () {
    console.log("server listening on port 8080");
});
