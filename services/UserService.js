const db = require("../models/main");

const Users = db.users;

const createUser = (body) => {
  const user = {
    login: body.login,
    password: body.password,
    age: body.age
  };
  return Users.create(user)
}

const deleteUser = (id) => {
  const updatedUser = {
    isdeleted: true
  }
  return Users.update(updatedUser, {
    where: { id: id }
  })
}

const updateUser = (id, body) => Users.findOne({id}).then(user => user.update(body).then(() => user.save()))

const getAllUsers = () => {
  return Users.findAll()
}

const getUser = (id) => {
  return Users.findByPk(id)
}

module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  createUser,
  deleteUser,
};
