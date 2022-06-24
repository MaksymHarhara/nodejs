const { Router } = require("express");
const UserRouter = require("./UserRouter");
const GroupRouter = require("./GroupRouter");

const router = Router();

router.use("/user", UserRouter);
router.use("/group", GroupRouter);

module.exports = router;
