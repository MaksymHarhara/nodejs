const express = require("express");
const router = require("./routes");
const db = require("./models/main");
const { methodsLogger, errorsLogger } = require("./middlewares/logger");
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

app.use((e, req, res, next) => {
    errorsLogger.log(e)
});

module.exports = app;
