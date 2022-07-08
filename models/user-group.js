const { DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user_group", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        group_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,

        timestamps: false,

        createdAt: false,

        updatedAt: false,
    });
};
