// Dependencies
// ======================================
const express = require("express");
const path = require("path");
const fs = require("fs");
const note = require("./db/db.json");
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

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ======================================

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
