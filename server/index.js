/** @format */

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;
// app: express 인스턴스

// mongodb+srv://kkh000608:kkh825721@cluster0.yazjka4.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/post", require("./Router/post"));

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://kkh000608:kkh825721@cluster0.yazjka4.mongodb.net/Community?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch((err) => console.log(`${err}`));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
