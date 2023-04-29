import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {};

let client; 
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(URI, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(URI, options);
    clientPromise = client.connect();
}

export default clientPromise;