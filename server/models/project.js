const mongoose = require('mongoose')
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Project', projectSchema)

