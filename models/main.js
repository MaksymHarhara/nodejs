const dbConfig = require('../config/db.config.js')

const Sequelize =  require('sequelize')

const UserModel = require('./user.js')
const GroupModel = require("./group.js");
const UserGroupModel = require("././user-group.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = UserModel(sequelize, Sequelize);
db.groups = GroupModel(sequelize, Sequelize);
db.usersGroups = UserGroupModel(sequelize, Sequelize);

module.exports = db;
