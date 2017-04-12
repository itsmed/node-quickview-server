const mongoose = require('mongoose');

const authenticatedUser = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = authenticatedUser;
