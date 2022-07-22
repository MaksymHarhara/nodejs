const { Router } = require("express");
const validate = require("express-joi-validate");
const { validateSchemas } = require("../schema/Validation");
const tokenCheck = require("../middlewares/auth.js");
const {
    getGroup,
    getGroups,
    createGroup,
    deleteGroup,
    updateGroup
} = require("../controllers/GroupController");

const router = Router();

router.get("/getGroup", tokenCheck, getGroups);

router.get("/getGroup/:id", tokenCheck, getGroup);

router.post("/createGroup", tokenCheck, createGroup);

router.put("/updateGroup/:id", tokenCheck, updateGroup);

router.delete(
    "/deleteGroup/:id",
    deleteGroup
);

module.exports = router;
