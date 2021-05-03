const DB = require('../utill/db.utill');
const {ObjectId} = require('mongodb');

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

    static async updateUser(id,value){
        console.log(id)
        console.log(value)
        const db = await DB.getCon();
        const result = await db.updateOne({ _id:ObjectId(id)},{$set: 
            value,
        });
        return result;

    }

    static async deleteUser(id){
        const db = await DB.getCon();
        const result = await db.deleteOne({_id:ObjectId(id)});
        return result;

    }
}

module.exports = UserServices;