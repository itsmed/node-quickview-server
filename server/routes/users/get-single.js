const mongoose = require('mongoose');
const userSchema = require('../../db/user/user-model');
const User = mongoose.model('User', userSchema);

const { handleDatabaseError } = require('../../db/db');

module.exports = function getSingleUser(req, res) {
  User.findOne({ '_id': req.params.id}, (err, user) => {
    if (err) {
      return handleDatabaseError(err, res);
    }
    res.json({ data: user });
  });
};
