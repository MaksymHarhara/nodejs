const { Router } = require("express");
const validate = require("express-joi-validate");
const { validateSchemas } = require("../schema/Validation");
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
 // getAutoSuggestUsers,
} = require("../controllers/UserController");

const router = Router();

router.get("/getUsers", getUsers);

router.get("/getUser/:id", validate(validateSchemas.getUserById), getUser);

router.post("/createUser", validate(validateSchemas.createUser), createUser);

router.put("/updateUser/:id", validate(validateSchemas.updateUser), updateUser);

/*router.get(
  "/getAutoSuggestUsers",
  validate(validateSchemas.getAutoSuggestUsers),
  getAutoSuggestUsers
);*/

router.delete(
  "/deleteUser/:id",
  validate(validateSchemas.deleteUser),
  deleteUser
);

module.exports = router;
