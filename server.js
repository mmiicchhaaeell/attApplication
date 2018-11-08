var express = require("express");
var issueHandler = require("./issueHandler");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/issues", issueHandler);

app.listen(3000);