const express = require("express");

const app = express();

const comments = require("./routes/comments");

app.use("/api/comments", comments);

app.get("/api", (req, res) => {
  res.send("Hello from express");
});

app.listen(1234);
