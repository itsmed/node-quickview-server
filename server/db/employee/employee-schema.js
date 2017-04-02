const mongoose = require('mongoose');
const { handleDatabaseError } = require('../db');

const employeeSchema = mongoose.Schema({
  "id": String,
  "index": Number,
  "guid": String,
  "name": {
    "first": String,
    "last": String
  },
  "company": String,
  "email": String,
  "phone": String,
  "permissions": Number,
  "full_name": String
});

employeeSchema.methods.handleDatabaseError = handleDatabaseError;

module.exports = employeeSchema;
