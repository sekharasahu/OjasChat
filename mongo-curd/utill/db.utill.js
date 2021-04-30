const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

class DB {
    static async getCon() {
        await client.connect();
        const db = await client.db('OJAS');
        const collection = await db.collection('user');
        return collection;
    }
}

module.exports = DB;