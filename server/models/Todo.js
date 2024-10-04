const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completionDate: {
        type: Date,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todo', todoSchema);
