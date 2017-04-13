const mongoose = require('mongoose');

const authenticatedUser = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permissions: Number
});

module.exports = authenticatedUser;
