let path = require("path");

module.exports = function (app) {
  // ===========================================================
  // Routing
  // ===========================================================
  // Notes Route

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // ===========================================================
  // '*'Route
  // ===========================================================

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // ===========================================================
};
