const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authenticatedUser = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permissions: Number
});

authenticatedUser.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(error, hash) {
      if (error) { return next(error); }

      user.password = hash;
      next();
    });
  });
});

authenticatedUser.methods.comparePassword = function(candidatePw, callback) {
  bcrypt.compare(candidatePw, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
};

const AuthenticatedUserModel = mongoose.model('authenticatedUser', authenticatedUser);

module.exports = authenticatedUserModel;
