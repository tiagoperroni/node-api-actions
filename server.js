const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.listen(3000, () => {
  console.log("Server on port 3000!");
});

module.exports = app;
