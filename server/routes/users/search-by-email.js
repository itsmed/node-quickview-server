const mongoose = require('mongoose');

const userSchema = require('../../db/user/user-schema');
const User = mongoose.model('User', userSchema);

module.exports = function getusersByEmail(req, res) {
  let email = new RegExp(req.params.email);
  User.find({'email': {$regex: req.params.email}}, (err, users) => {
    if (err) {
      return res.json({ data : 'Database error, try again later' })
    }
    res.json({ data: users });
  });
}
