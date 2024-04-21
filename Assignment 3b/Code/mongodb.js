const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/profile'
const database = 'student'
const client = new mongoClient(url);

const dbConnect = async () => {
    const result = await client.connect()
    const db = await result.db(database)
    return db.collection('profile')
}

module.exports = dbConnect;