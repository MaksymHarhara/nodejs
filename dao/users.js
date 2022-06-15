const db = require('../db/db');

class UsersDAO {
    async createUsers (login, password, age) {
        const [id] = await db('users').insert({
            login: login,
            password: password,
            age: age,
        })
            .returning('id');

        return id;
    }

    async updateUsers (id, login, password, age) {
        await db('users').where('id', id).update({login: login, password: password, age: age})
    }

    async deleteUsers (id) {
        await db('users').where('id', id).update({is_deleted: true})
    }

    async getAllUsers() {
        return db('users').select('*');
    }

    async getUser(id) {
        return db('users').select('*').where('id', id);
    }
}

module.exports = new UsersDAO();


