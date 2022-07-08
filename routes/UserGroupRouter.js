const Express = require("express");
const UserGroupController = require("../controllers/UserGroupController.js");

const UserGroupRouter = app => {
    const router = Express.Router();

    router.post("/", UserGroupController.addUsersToGroup);

    router.get("/", UserGroupController.getUsersAndGroupsTable);
}

module.exports = UserGroupRouter;
