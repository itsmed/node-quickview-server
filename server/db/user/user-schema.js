const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  "id": String,
  "index": Number,
  "guid": String,
  "isActive": Boolean,
  "balance": String,
  "picture": String,
  "name": {
    "first": String,
    "last": String
  },
  "company": String,
  "email": String,
  "phone": String,
  "address": String,
  "about": String,
  "registered": String,
  "full_name": String
});

module.exports = userSchema;
