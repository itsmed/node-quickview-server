const mongoose = require('mongoose');
const User = require('../../db/user/user-schema');

module.exports = function getAllUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      return res.json({ data: 'Database error, try again later' });
    }
    return res.json({ data: users });
  });
};
