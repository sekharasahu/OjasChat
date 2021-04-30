const DB = require('../utill/db.utill');

class UserServices {
    //Save new user in DB
    static async save(newUser) {
        const db = await DB.getCon();
        const result = await db.insertOne(newUser);
        return result.ops[0];
    }

    //GET all users
    //Save new user in DB
    static async getAll() {
        const db = await DB.getCon();
        const result = await db.find({}).toArray();;
        return result;
    }
}

module.exports = UserServices;