var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

//Allows for serving of static files hosted in the public folder THIS HAS TO COME BEFORE THE ROUTE DECLARATIONS
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });