"use strict";
// BASE SETUP
// =============================================================================
// call the packages we need
var express = require("express");
var bodyParser = require("body-parser");
var router = require("./routes/student");
var app = express();
var port = process.env.PORT || 3001; // set our port
const db = require("./db/dbConfig");

//const db = require("./config/sequelise");
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------
app.use("/api", router);

// =============================================================================
app.listen(port);
console.log("Magic happens on port " + port);
