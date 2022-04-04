const express = require("express");
const { mean, median, mode } = require("./calculations");

const app = express();

app.get("/mean", (req, res) => {
  let nums = req.query.nums;

  let result = {
    operation: "mean",
    value: mean(nums),
  };

  return res.send(result);
});

app.get("/median", (req, res) => {
  let nums = req.query.nums;

  let result = {
    operation: "median",
    value: median(nums),
  };

  return res.send(result);
});

app.get("/mode", (req, res) => {
  let nums = req.query.nums;

  let result = {
    operation: "mode",
    value: mode(nums),
  };

  return res.send(result);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
