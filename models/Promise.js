const mongoose = require('mongoose');

const PromiseSchema = mongoose.Schema({
    // setting up relationship to user
    user: {
        // MongoDB document has an ObjectId
        type: mongoose.Schema.Types.ObjectId,
        // refer to the collection of users
        ref: 'users'
    }, 
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('promise', PromiseSchema);