const Express = require("express");
const LoginController = require("../controllers/LoginController.js");

const router = Express.Router();

router.post("/", LoginController.login);

module.exports = router;
