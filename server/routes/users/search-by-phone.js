const mongoose = require('mongoose');

const userSchema = require('../../db/user/user-schema');
const User = mongoose.model('user', userSchema);

module.exports = function getUsersByPhone(req, res) {
  let phone = new RegExp(req.params.phone);
  User.find({'phone': {$regex: req.params.phone}}, (err, users) => {
    if (err) {
      console.log('ERROR', err);
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: users });
  });
}
