const GroupService = require("../services/GroupService");

const getGroups = async (req, res) => {
    try {
        const groups = await GroupService.getAllGroups();
        res.status(200).json(groups);
    } catch (err) {
        console.error(err);
        res.status(500).json('something went wrong');
    }
};

const getGroup = async (req, res) => {
    try {
        const group =  await GroupService.getGroup(req.params.id);
        res.status(200).json(group);
    } catch (err) {
        console.error(err);
        res.status(500).json('something went wrong');
    }
};

const createGroup = async (req, res) => {
    try {
        const  id = await GroupService.createGroup(req.body);
        res.status(201).json(id);
    } catch (error) {
        console.error(error);
        res.status(500).json('something went wrong');
    }
}

const updateGroup = async (req, res) => {
    try {
        const group = await GroupService.updateGroup(req.params.id, req.body);
        res.status(200).json(group);
    } catch (err) {
        console.error(err);
        res.status(500).json('smth went wrong');
    }
};

const deleteGroup = async (req, res) => {
    try {
        const group = await GroupService.deleteGroup(req.params.id);
        res.status(200).json(group);
    } catch (err) {
        console.error(err);
        res.status(500).json('smth went wrong during delete');
    }
};

module.exports = {
    getGroups,
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup
};
