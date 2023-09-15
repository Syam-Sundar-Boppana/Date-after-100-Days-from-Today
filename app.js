const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (req, res) => {
  const date = new Date();
  const result = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  res.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
