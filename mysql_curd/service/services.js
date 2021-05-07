const Db = require('../utill/db');
var SqlString = require('sqlstring');

class EmpService {
    static async save(user) {   
        try {
            let conn = await Db.getConn();
            let sql = SqlString.format("INSERT INTO users (id, name, address, phone, age) values (?, ? , ?, ?, ?)", [
                user.id,
                user.name,
                user.address,
                user.phone,
                user.age
            ]);
            let result = await conn.query(sql);
            return result;
        } catch (err) {
            console.log(err);
        }

    }


    static async getUser() {   
        try {
            let conn = await Db.getConn();
            let result = await conn.query("SELECT * FROM users");
            return result;
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = EmpService;