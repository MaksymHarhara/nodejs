const Express = require("express");
const LoginController = require("../controllers/login");

const Login = app => {

    const router = Express.Router();

    router.post("/", LoginController.login);

    app.use('/api/login', router);
};

module.exports = Login;
