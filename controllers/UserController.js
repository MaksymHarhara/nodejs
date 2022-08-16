const UserService = require("../services/UserService");

const getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json('something went wrong');
  }
};

const getUser = async (req, res) => {
  try {
    const user =  await UserService.getUser(req.params.id);
    res.status(200).json(user);
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
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json('smth went wrong');
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json('smth went wrong during delete');
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
