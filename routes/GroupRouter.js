const { Router } = require("express");
const validate = require("express-joi-validate");
const { validateSchemas } = require("../schema/Validation");
const {
    getGroup,
    getGroups,
    createGroup,
    deleteGroup,
    updateGroup
} = require("../controllers/GroupController");

const router = Router();

router.get("/getGroup", getGroups);

router.get("/getGroup/:id", getGroup);

router.post("/createGroup", createGroup);

router.put("/updateGroup/:id", updateGroup);

router.delete(
    "/deleteGroup/:id",
    deleteGroup
);

module.exports = router;
