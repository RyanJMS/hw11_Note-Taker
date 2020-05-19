// Dependencies
// ======================================
const express = require("express");
const path = require("path");
const fs = require("fs");
const Service = require("./db/service");
const service = new Service();

// ======================================

// Init Express App
// ======================================
const app = express();
const PORT = process.env.PORT || 3000;
// ======================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// ======================================
// Routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  service.read().then(function (note) {
    res.json(JSON.parse(note));
  });
});

app.post("/api/notes", (req, res) => {
  service.receive(req.body, (data) => {
    res.json(data);
  });
});

app.delete("/api/notes/:id", function (req, res) {
  service.delete(req.params.id, (data) => {
    res.json(data);
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"), function (err) {
    if (err) throw err;
    else console.log("Success");
  });
});
// ======================================

app.listen(PORT, () => console.log("Listening on port: " + PORT));
