require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');

const dbConnectionString = process.env.MONGODB_URI || 'mongodb+srv://cporter:W2KRAFsjhiOyfZ2q@wordsearchgenerator.zozpxo3.mongodb.net/';

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});