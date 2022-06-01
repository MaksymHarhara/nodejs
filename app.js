const express = require("express");
const router = require("./routes");

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api", router);

module.exports = app;
