const { addUsersToGroup, getUsersAndGroups } = require("../services/User-Group.js");

exports.addUsersToGroup = (req, res) => {
    addUsersToGroup(req.body)
        .then(() => {
            res.send({
                message: "Data was updated successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error while updating!",
                details: err
            });
        });
};

exports.getUsersAndGroupsTable = (req, res) => {
    getUsersAndGroups()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Unknown error"
            });
        });
};
