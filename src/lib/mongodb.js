const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const options = {};

if (!uri) {
  throw new Error('Add Mongo URI to .env.local');
}

let client = new MongoClient(uri, options);
let clientPromise;

if (process.env.NODE_ENV !== 'production') {
  // Check if the global MongoDB client promise exists
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // For other environments (e.g., production), connect directly without checking global promise
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
