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
      return next(err);
    }

    if (existingUser) {
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
        return next(err);
      }
      res.send({ token: tokenForUser(user) });
    })
  });
};

exports.signin = function(req, res, next) {
  console.log(req.body);
  const { username, password } = req.body;

  AuthenticatedUser.findOne({ username }, (err, existingUser) => {
    if (err) {
      return res.status(422).send({ error: 'Database error, please try again later.' });
    }

    if (!existingUser) {
      console.log('\n\n\n\nfailued ro find user\n\n\n\n');
      return res.status(422).send({ error: 'Not Found' });
    }
    const hash = existingUser.password;

    bcrypt.compare(password, hash, function(error, isMatch) {
      if (err) {
        return res.status(422).send({ error: 'Database error, please try again later.' });
      }
      if (!isMatch) {
        return res.send({ message: 'No user found with those credentials.' });
      }
      else {
        res.json({ token: tokenForUser(existingUser) });
      }
    })
  });
};

exports.checkUserToken = function(req, res, next) {
  
  const { authorization } = req.headers;
  // console.log('trying!', authorization, req.hea);
  if (!authorization) {
    res.json({ error: 'Unauthorized' });
    return;
  }

  const token = jwt.decode(authorization, process.env.TOKEN_SECRET);
  if (!token) {
    res.json({ error: 'Unauthorized' });
    return;
  }
  if (token.permissions && token.permissions > 0) {
    next();
  }
};
