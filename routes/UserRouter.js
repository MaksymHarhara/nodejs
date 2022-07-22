const { Router } = require("express");
const validate = require("express-joi-validate");
const { validateSchemas } = require("../schema/Validation");
const { tokenCheck } = require("../middlewares/auth.js");
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require("../controllers/UserController");

const router = Router();

router.get("/getUsers", tokenCheck, getUsers);

router.get("/getUser/:id", tokenCheck, validate(validateSchemas.getUserById), getUser);

router.post("/createUser", tokenCheck, validate(validateSchemas.createUser), createUser);

router.put("/updateUser/:id", tokenCheck, validate(validateSchemas.updateUser), updateUser);

router.delete(
  "/deleteUser/:id", tokenCheck,
  validate(validateSchemas.deleteUser),
  deleteUser
);

module.exports = router;
