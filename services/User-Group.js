const db = require("../models/main");

const UsersGroups = db.usersGroups;

const addUsersToGroup = (body) => {
    let objectsToAdd = []
    body.users.forEach((user_id) => {
        objectsToAdd.push({
            group_id: body.groupId,
            user_id
        })
    })
    console.log(objectsToAdd)
    return UsersGroups.bulkCreate(objectsToAdd)
}

const getUsersAndGroups = () => {
    return UsersGroups.findAll();
}

module.exports = { addUsersToGroup, getUsersAndGroups }
