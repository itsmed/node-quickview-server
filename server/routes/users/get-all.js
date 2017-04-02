const mongoose = require('mongoose');
const userSchema = require('../../db/user/user-schema');
const User = mongoose.model('User', userSchema);

module.exports = function getAllUsers(req, res) {
  console.log('et all users called');
  User.find((err, users) => {
    console.log('finding users');
    if (err) {
      console.log('error occured', err.message);
      return res.json({ data: 'Database error, please try again later' });
    }
    console.log('usres found', users);
    return res.json({ data: users });
  });
};
