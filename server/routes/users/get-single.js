const mongoose = require('mongoose');
const userSchema = require('../../db/user/user-schema');
const User = mongoose.model('User', userSchema);

module.exports = function getSingleUser(req, res) {
  User.findOne({ '_id': req.params.id}, (err, user) => {
    if (err) {
      return res.json({ data: 'Database error, please try again later' });
    }
    res.json({ data: user });
  });
};
