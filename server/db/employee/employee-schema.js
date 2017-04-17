const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  "empId": String,
  "index": Number,
  "isActive": Boolean,
  picture: String,
  "name": {
    "first": String,
    "last": String
  },
  "company": String,
  "email": String,
  "permissions": Number
});

module.exports = mongoose.model('employee', employeeSchema);
