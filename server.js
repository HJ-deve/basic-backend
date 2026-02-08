const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/practice", function (req, res) {
  res.send("practicing how to make server");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
