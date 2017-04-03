const mongoose = require('mongoose');

const userSchema = require('../../db/user/user-schema');
const User = mongoose.model('User', userSchema);

module.exports = function getUserByName(req, res) {
  let name = new RegExp(req.params.name);
  User.find({'full_name': {$regex: req.params.name}}, (err, employees) => {
    if (err) {
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: employees });
  });
}
