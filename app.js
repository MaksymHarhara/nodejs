const express = require("express");
const router = require("./routes");
const db = require("./models/main");
const winston = require("winston");

const app = express();

// Body parser
app.use(express.json());

(async () => {
    await db.sequelize.sync();
})();

app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api", router);

module.exports = app;
