const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.q6h4g9g.mongodb.net/';
const dbName = 'IT0502';

let db;

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(mongoURI, {
      useUnifiedTopology: true,
    });
    db = client.db(dbName);
    console.log('Connected to MongoDB successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

function getDatabase() {
  return db;
}

module.exports = { connectToDatabase, getDatabase };