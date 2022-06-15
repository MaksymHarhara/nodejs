const db = require('../db/db')
const {json} = require("express");
const  usersDAO = require('../dao/users')

const createUser = async (usersDto) => {
  const {login, password, age} = usersDto;
  await usersDAO.createUsers(login, password, age);
}

const deleteUser = async (usersDto) => {
  await usersDAO.deleteUsers(usersDto);
};

const updateUser = async (usersDto) => {
  const {id, login, password, age} = usersDto;
  await usersDAO.updateUsers(id, login, password, age);
}

const getAllUsers = async () => {
  await usersDAO.getAllUsers();
}

const getUser = async (userDto) => {
  await usersDAO.getUser(userDto);
}
/*
const getAutoSuggestUsers = (loginSubstring, limit) => {
  const filteredUsers = userList
    .sort((a, b) => {
      if (a.login < b.login) return -1;
      if (a.login > b.login) return 1;
      return 0;
    })
    .filter((user) => user.login.toLowerCase().indexOf(loginSubstring) > -1);

  if (filteredUsers.length > 1) {
    return filteredUsers.slice(0, limit);
  }

  return [];
};
*/
module.exports = {
  getUser,
  getAllUsers,
  updateUser,
  createUser,
  deleteUser,
 // getAutoSuggestUsers,
};
