const UserService = require("../services/UserService");

const getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json('something went wrong');
  }
};

const getUser = async (req, res) => {
  try {
    const user =  await UserService.getUser(req.params.id);
    res.status(200).json(user.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json('something went wrong');
  }
};

const createUser = async (req, res) => {
  try {
    const  id = await UserService.createUser(req.body);
    res.status(201).json(id);
  } catch (error) {
    console.error(error);
    res.status(500).json('something went wrong');
  }
}

const updateUser = async (req, res) => {
  try {
    await UserService.updateUser(req.body);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500).json('smth went wrong');
  }
};

const deleteUser = async (req, res) => {
  try {
    await UserService.deleteUser(req.params.id);
    res.status(200)
  } catch (err) {
    console.error(err);
    res.status(500).json('smth went wrong during delete');
  }
};
/*
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
*/
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
 // getAutoSuggestUsers,
};
