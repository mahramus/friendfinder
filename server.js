var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./routing/apiRoutes");
var htmlRoutes = require("./routing/htmlRoutes");

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes());
app.use(htmlRoutes());

app.listen(port, function () {
  console.log('Started on Port: ' + port);
});