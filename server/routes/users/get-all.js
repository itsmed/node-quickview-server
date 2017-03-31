const User = require('../../db/user/user-model');

module.exports = function getAllUsers(req, res) {
  User.find((err, users) => {
    if (err) {
      return User.handleDatabaseError(err, res);
    }
    res.json({ data: users });
  });
};
