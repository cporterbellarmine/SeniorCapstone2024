const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        unique: true
    },
    easy: {
        type: Boolean,
        required: true
    },
    intermediate: {
        type: Boolean,
        required: true
    },
    difficult: {
        type: Boolean,
        required: true
    },
    expert: {
        type: Boolean,
        required: true
    },
    numberOfWords: {
        type: Number,
        required: true
    }
});

const Topic = mongoose.model('Topic', topicSchema);
