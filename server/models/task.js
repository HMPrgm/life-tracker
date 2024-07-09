const mongoose = require('mongoose');
const Project = require('./project');
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: String,
    date: Date,
    completed: {
        type: Boolean,
        default:false
    },
    project: {
        type: String
        
    }
});

module.exports = mongoose.model('Task', taskSchema)

