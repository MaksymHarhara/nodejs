const { Router } = require("express");
const UserRouter = require("./UserRouter");
const GroupRouter = require("./GroupRouter");
const UserGroupRouter = require("./UserGroupRouter")
const Login = require("./login");

const router = Router();

router.use("/user", UserRouter);
router.use("/group", GroupRouter);
router.use("/user-group", UserGroupRouter);
router.use("/login", Login);

module.exports = router;
