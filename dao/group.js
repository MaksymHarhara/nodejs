const db = require('../db/db');

class GroupDAO {
    async createGroup (name, permissions) {
        return db('group').insert({
            name: name,
            permissions: permissions
        }).returning('id');
    }

    async updateGroup (id, name, permissions) {
        await db('group').update({name: name, permissions: permissions}).whereRaw('id = ?', [id]);
        return db('group').select('*').where('id', id);
    }

    async deleteGroup (id) {
        await db('group').delete().where('id', id);
        return db('group').select('*').where('id', id);
    }

    async getGroups() {
        return db('group').select('*');
    }

    async getGroup(id) {
        return db('group').select('*').where('id', id);
    }
}

module.exports = new GroupDAO();
