const  groupDAO = require('../dao/group')

const createGroup = async (groupDto) => {
    const {name, permissions} = groupDto;
    return await groupDAO.createGroup(name, permissions);
}

const deleteGroup = async (groupDto) => {
    return await groupDAO.deleteGroup(groupDto);
};

const updateGroup = async (groupId, groupDto) => {
    const {name, permissions} = groupDto;
    return await groupDAO.updateGroup(groupId, name, permissions);
}

const getAllGroups = async () => {
    return await groupDAO.getGroups();
}

const getGroup = async (groupDto) => {
    return await groupDAO.getGroup(groupDto);
}

module.exports = {
    getGroup,
    getAllGroups,
    updateGroup,
    createGroup,
    deleteGroup
};
