var express = require("express");

var app = express();

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/*", function(req, res) {
    res.sendFire(path.join(__dirname, "home.html"));
});