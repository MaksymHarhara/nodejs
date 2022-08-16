const { DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("group", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        group_name: {
            type: DataTypes.STRING,
            unique: true
        },
        roles: {
            type: Sequelize.ARRAY(Sequelize.ENUM("READ", "WRITE", "DELETE", "SHARE", "UPLOAD_FILES"))
        }
    }, {
        timestamps: false,

        createdAt: false,

        updatedAt: false,
    });
};
