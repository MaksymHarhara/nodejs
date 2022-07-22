const Express = require("express");
const UserGroupController = require("../controllers/UserGroupController.js");
const tokenCheck = require("../middlewares/auth.js");

const UserGroupRouter = app => {
    const router = Express.Router();

    router.post("/", tokenCheck, UserGroupController.addUsersToGroup);

    router.get("/", tokenCheck, UserGroupController.getUsersAndGroupsTable);
}

module.exports = UserGroupRouter;
