const mongoose = require('mongoose');
const userSchema = require('../../db/user/user-model');
const User = mongoose.model('User', userSchema);

module.exports = function getAllUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      return User.handleDatabaseError(err, res);
    }
    res.json({ data: users });
  });
};
