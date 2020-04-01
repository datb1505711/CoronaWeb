const express = require("express");
const client = require("./connector");
var bodyParser = require("body-parser");
const request = require("request");
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 4000);
app.use(bodyParser.json());
// const { Client } = require("pg");
// const connectionString = "postgres://postgres:123456@localhost:5432/userlogin";
// const client = new Client({
//   connectionString: connectionString
// });
// client.connect();

app.get("/getAllUser", function(req, res, next) {
  client.query("SELECT * FROM guest", function(err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

app.post("/login", (req, res) => {
  console.log("login");
  // client.query("SELECT * FROM guest", function(err, result) {

  // });

  var status = false;
  if (result.rows == null)
    res.status(201).send({ message: "login unsuccess!", status: "FAILED" });
  else {
    result = result.rows;

    for (var data in result) {
      if ("admin" == req.body.username && "admin" == req.body.password)
        status = true;
    }
    if (status)
      res.status(200).send({ message: "login success", status: "OK" });
    else
      res.status(201).send({ message: "login unsuccess!", status: "FAILED" });
  }
});

app.get("/getGlobalTotals", (req, res) => {
  request("https://corona.lmao.ninja/all", function(error, response, body) {
    // console.error("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    body = JSON.parse(body);

    res.status(200).send(body);
  });
});

app.get("/getHistoricalData", async (req, res) => {
  request("https://corona.lmao.ninja/v2/historical", function(
    error,
    response,
    body
  ) {
    // console.error("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    body = JSON.parse(body);
    res.status(200).send(body);
  });
});

app.get("/getCaseWithCountry", async (req, res) => {
  request("https://corona.lmao.ninja/countries", function(
    error,
    response,
    body
  ) {
    // console.error("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    body = JSON.parse(body);
    res.status(200).send(body);
  });
});

app.listen(4000, function() {
  console.log("Server is running.. on Port 4000");
});

module.export = app;
