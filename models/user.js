const { DataTypes} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        login: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        isdeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        timestamps: false,

        createdAt: false,

        updatedAt: false,
    });
};
