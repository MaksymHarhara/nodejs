let userList = require("../db/UsersList");

const getUser = (userId) => {
  const user = userList.find(({ id }) => id === parseInt(userId));
  return user;
};

const getUsers = () => {
  return userList;
};

const createUser = (login, password) => {
  const newUser = {
    id: userList.length + 1,
    login: login,
    password: password,
    age: req.body.age,
    isDeleted: false,
  };

  userList.push(newUser);

  return newUser;
};

const deleteUser = (user) => {
  if (!user) return;
  const deletedUser = userList.find((item) => item && item.id === user.id);
  if (!deletedUser) return;
  deletedUser.isDeleted = true;
};

const updateUser = (newUser) => {
  removeUser(newUser);
  userList.push(newUser);
};

const removeUser = (newUser) => {
  if (!newUser) return;
  const userIndex = userList.findIndex(
    (user) => user && user.id === newUser.id
  );
  if (userIndex < 0) return;
  userList = userList.filter((user) => user && user.id === newUser.id);
};

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

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  removeUser,
  getAutoSuggestUsers,
};
