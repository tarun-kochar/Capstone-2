const mongoose = require("mongoose");
const {Schema} = mongoose;

const TodoSchema = new Schema({
    title: String,
    date_created: Date,
    isDone: {
        type: Boolean,
        default: false
    },
})

module.exports = TodoSchema;

// Under Models folder