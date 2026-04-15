const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("My CI/CD Project is Running 🚀");
});

app.get("/status", (req, res) => {
  res.json({ status: "OK", project: "Exp9 CI/CD" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
