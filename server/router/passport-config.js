require('dotenv').config();
const mongoose = require('mongoose');
let passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const authenticatedUser = require('../db/authenticated-user/authenticated-user');
const AuthenticatedUser = mongoose.model('AuthenticatedUser', authenticatedUser);

passport.serializeUser(function(user, done) {
  if (!user.id) {
    return done(null, user);
  } else {
    done(null, user.id);
  }
});

passport.deserializeUser(function(id, done) {
  AuthenticatedUser.findById(id, function(err, user) {
    if (err) {
      return done(err, user);
    } else {
      return done(null, user);
    }
  })
})

passport.use(new LocalStrategy(
  function(username, password, done) {
    AuthenticatedUser.findOne({username},
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'No user by that name' });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect Password' });
        }

        return done(null, user);
    })
  }

));


module.exports = passport;
