const UserService = require("../services/UserService");

const getUsers = (req, res) => {
  const userList = UserService.getUsers();
  res.send(userList);
};

const getUser = (req, res) => {
  const user = UserService.getUser(req.params.id);

  if (!user) {
    return res.status(404).send("The course with the given ID was not found");
  }

  res.send(user);
};

const createUser = (req, res) => {
  const newUser = UserService.createUser(req.body.login, req.body.password);
  res.send(newUser);
};

const updateUser = (req, res) => {
  const newUser = req.body;
  UserService.updateUser(newUser);
  res.json(newUser);
};

const deleteUser = (req, res) => {
  const user = {
    id: req.params.id,
  };

  UserService.deleteUser(user);
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
