const UserService = require("../services/UserService");
const db = require("../db/db");

const getUsers = (req, res) => {
  const userList = db.query("SELECT * FROM users");
  res.json(userList.rows);
};

const getUser = (req, res) => {
  const id = req.params.id;
  const user = db.query("SELECT * FROM users where id = $1", [id]);

  if (!user) {
    return res.status(404).send("The course with the given ID was not found");
  }

  res.json(user.rows[0]);
};

const createUser = (req, res) => {
  UserService.createUser(req.body.login, req.body.password, req.body.age);
  res.send("success");
};

const updateUser = (req, res) => {
  const {id, login, password, age} = req.body;
  const user = db.query(
      "UPDATE users set login = $1, password = $2, age = $3 where id = $4 RETURNING *",
      [login, password, age, id]
  )
  res.json(user);
};

const deleteUser = (req, res) => {
  const id = req.params.id
  const user = db.query("DELETE FROM users where id = $1", [id]);

  res.json(user);
};

const getAutoSuggestUsers = (req, res) => {
  try {
    const { login: loginSubstring, limit } = req.query;
    const result = UserService.getAutoSuggestUsers(loginSubstring, limit);

    if (!result.length) {
      res.sendStatus(404);
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAutoSuggestUsers,
};
