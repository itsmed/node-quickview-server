const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authenticatedUser = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
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
console.log('inside user pre save',  user);
  bcrypt.hash(user.password, 5, function(err, hash) {
    if(err) {
      console.log('fuck', err.message);
      next(err);
    }

    console.log('success', hash);
    user.password = hash;
    next();
  });
//   bcrypt.genSalt(10, function(err, salt) {
//     console.log('salt', salt);
//     if (err) { 
//       console.log('somehtng wrong in getnASalt', err);
//       return next(err); }

//     bcrypt.hash(user.password, salt, null, function(error, hash) {
//       console.log('insisde hash', hash);
//       if (error) { 
//         console.log('someoht wrong in hashing', error);
//         return next(error); }
// console.log('hashed', hash);
//       user.password = hash;
//       next(user);
//     });
//   });
});

authenticatedUser.methods.comparePassword = function(candidatePw, callback) {
  bcrypt.compare(candidatePw, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
};

const AuthenticatedUserModel = mongoose.model('authenticated_user', authenticatedUser);

module.exports = AuthenticatedUserModel;
