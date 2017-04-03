const mongoose = require('mongoose');
const userSchema = require('../../db/user/user-schema');
const User = mongoose.model('User', userSchema);

module.exports = function getAllUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      return 'Database error, try again later';
    }
    res.json({ data: users });
  });
};
