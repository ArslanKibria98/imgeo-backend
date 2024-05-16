import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017/mydatabase';
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error occurred while connecting to MongoDB:', err);
        return;
    }
    console.log('Connected successfully to MongoDB');
    client.close(); // Close the connection when done
});