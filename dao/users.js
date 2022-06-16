const db = require('../db/db');

class UsersDAO {
    async createUsers (login, password, age) {
        return db('users').insert({
            login: login,
            password: password,
            age: age,
        }).returning('id');
    }

    async updateUsers (id, login, password, age) {
        await db('users').update({login: login, password: password, age: age}).whereRaw('id = ?', [id]);
        return db('users').select('*').where('id', id);
    }

    async deleteUsers (id) {
        await db('users').update({is_deleted: true}).where('id', id);
        return db('users').select('*').where('id', id);
    }

    async getAllUsers() {
        return db('users').select('*');
    }

    async getUser(id) {
        return db('users').select('*').where('id', id);
    }
}

module.exports = new UsersDAO();


