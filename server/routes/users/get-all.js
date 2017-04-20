const mongoose = require('mongoose');
const User = require('../../db/user/user-schema');

module.exports = function getAllUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      // console.log('made it here', err);
      return res.json('Database error, try again later');
    }
    return res.json(users);
  });
};
