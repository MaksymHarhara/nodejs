const  usersDAO = require('../dao/users')

const createUser = async (usersDto) => {
  const {login, password, age} = usersDto;
  return await usersDAO.createUsers(login, password, age);
}

const deleteUser = async (usersDto) => {
  return await usersDAO.deleteUsers(usersDto);
};

const updateUser = async (userId, usersDto) => {
  const {login, password, age} = usersDto;
  return await usersDAO.updateUsers(userId, login, password, age);
}

const getAllUsers = async () => {
  return await usersDAO.getAllUsers();
}

const getUser = async (userDto) => {
  return await usersDAO.getUser(userDto);
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
