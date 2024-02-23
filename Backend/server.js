// require('dotenv').config();
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//     console.log('Successfully connected to MongoDB database');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');

const dbConnectionString = process.env.MONGODB_URI;
mongoose.connect('mongodb+srv://react_user:j83LQzpEO2zXJiU5@wordsearchgenerator.zozpxo3.mongodb.net/wordsearch', {
    dbName: 'wordsearch',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const topicRouter = require('./routes/topicRoutes');
app.use(topicRouter);

const wordRouter = require('./routes/wordRoutes');
app.use(wordRouter);    
