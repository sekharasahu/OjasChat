var mysql = require('mysql2/promise');

class Db {
    static async getConn() {
        let connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'user'
        });

        await connection.connect();
        return connection;
    }
}

module.exports = Db;