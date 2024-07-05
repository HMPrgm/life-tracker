const mongoose = require('mongoose')
const { Schema } = mongoose;

export const Task = new Schema({
    name: String,
    date: Date,
    completed: Boolean
})

