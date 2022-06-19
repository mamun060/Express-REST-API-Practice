// Define mongoose defendency
const mongoose = require('mongoose');

// Implement database schema
const DataSchema = mongoose.Schema({
    Name    : String,
    Roll    : String,
    Class   : String,
    Remark  : String
});

// Implement database collection table with database schema
const studentModel = mongoose.model('students', DataSchema);

module.exports = studentModel;