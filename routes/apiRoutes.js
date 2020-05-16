//Loading Data from db.json
// ============================================
let noteData = require("../db/db.json");
// ============================================

module.exports = function (app) {
  // API GET Requests
  // ============================================

  app.get("/api/notes", function (req, res) {
    res.json(db.json);
  });

  // ============================================

  // API POST Requests
  // ============================================

  app.post("/api/notes", function (req, res) {
    notes.push(req.body);
  });

  // ============================================

  // API DELETE Resquests
  // ============================================
  app.delete("/api/notes/:id", function (req, res) {
    res.send("DELETE request recieved");
  });

  // ============================================
};
