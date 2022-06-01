const { Router } = require("express");
const UserRouter = require("./UserRouter");

const router = Router();

router.use("/user", UserRouter);

module.exports = router;
