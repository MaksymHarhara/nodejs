const { Router } = require("express");
const validate = require("express-joi-validate");
const { validateSchemas } = require("../schema/Validation");
const tokenCheck = require("../middlewares/auth.js");
const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require("../controllers/UserController");

const UserRouter = Router();

UserRouter.get("/getUsers", tokenCheck, getUsers);

UserRouter.get("/getUser/:id", tokenCheck, validate(validateSchemas.getUserById), getUser);

UserRouter.post("/createUser", tokenCheck, validate(validateSchemas.createUser), createUser);

UserRouter.put("/updateUser/:id", tokenCheck, validate(validateSchemas.updateUser), updateUser);

UserRouter.delete(
  "/deleteUser/:id", tokenCheck,
  validate(validateSchemas.deleteUser),
  deleteUser
);

module.exports = UserRouter;
