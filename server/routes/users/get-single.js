const User = require('../../db/user/user-model');

module.exports = function getSingleUser(req, res) {
  User.findOne({ '_id': req.params.id}, (err, user) => {
    if (err) {
      return handleDatabaseError(err, res);
    }
    res.json({ data: user });
  });
};
