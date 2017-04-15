require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

const AuthenticatedUser = require('../db/authenticated-user/authenticated-user');

function* fakeId(user) {
  var current = 0;
  while (current < 1000000) {
    yield current++;
  }
}

const id = fakeId();

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({
    sub: user.id,
    iat: timestamp,
    permissions: user.permissions
  }, process.env.TOKEN_SECRET);
};

exports.signup = function(req, res, next) {
  const { username, password } = req.body;
  
  AuthenticatedUser.findOne({ username }, function(err, existingUser) {
    if (err) {
      console.log('error finding', err);
      return next(err);
    }

    if (existingUser) {
      console.log('someone is in there?', existingUser);
      res.status(422).send({ error: 'Username in use.' });
    }

    // add check for no undefined username and password
    const user = new AuthenticatedUser({
      username,
      password,
      id: id.next().value,
      permissions: 7
    });

    user.save(function(err) {
      if (err) {
        console.log('saving failed');
        return next(err);
      }
      console.log('all good!', user, tokenForUser(user));
      res.send({ token: tokenForUser(user) });
    })
  });
};

exports.signin = function(req, res, next) {
  const { username, password } = req.body;

  console.log('userame', username, password);
  AuthenticatedUser.findOne({ username }, (err, existingUser) => {
    if (err) {
      res.status(422).send({ error: 'Database error, please try again later.' });
    }
    const hash = existingUser.password;

    bcrypt.compare(password, hash, function(error, isMatch) {
      if (err) {
        res.status(422).send({ error: 'Database error, please try again later.' });
      }
      if (!isMatch) {
        res.send({ message: 'No user found with those credentials.' });
      }
      else {
        res.json({ token: tokenForUser(existingUser) });
      }
    })
  });
};

exports.checkUserToken = function(req, res, next) {
  // console.log('maybe', req.headers.authorization);
  const { authorization } = req.headers;
  // console.log(authorization);
  if (!authorization) {
    res.json({ error: 'Unauthorized' });
    return;
  }

  

  const token = jwt.decode(authorization, process.env.TOKEN_SECRET);
  console.log('token!', token);
  next();
};
