const mongoose = require('mongoose');

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
  "phone": Number,
  "permissions": Number,
  "full_name": String
});

module.exports = employeeSchema;
