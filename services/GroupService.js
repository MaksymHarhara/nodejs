const db = require("../models/main");

const Groups = db.groups;

const getAllGroups = () => {
    return Groups.findAll()
}

const getGroup = (id) => {
    return Groups.findByPk(id)
}

const createGroup = (body) => {
    const group = {
        group_name: body.groupName,
        roles: body.roles
    };
    return Groups.create(group)
}

const updateGroup = (id, body) => {
    const updatedGroup = {
        group_name: body.groupName,
        roles: body.roles
    }

    return Groups.update(updatedGroup, {
        where: { id: id }
    })
}

const deleteGroup = (id) => {
    return Groups.destroy({
        where: { id: id }
    })
}

module.exports = {
    getGroup,
    getAllGroups,
    updateGroup,
    createGroup,
    deleteGroup
};
