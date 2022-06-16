const knex = require('knex');
const dbConfig = require('./dbConfig');

const db = knex(dbConfig.development);
module.exports = db;

