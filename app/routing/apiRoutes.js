var express = require("express");
var friends = require("../data/friends");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function(req, res) {
    return res.json(characters);
});

app.post("/api/friends", function(req, res) {
    
    var newPerson = req.body;

    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();

    console.log(newPerson);

    friends.people.push(newPerson);

    res.json(newPerson);
});