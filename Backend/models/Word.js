const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    number_of_characters: {
        type: Number,
        required: true
    },
    dropDups: true
});

const Word = mongoose.model('Word', wordSchema);
