const mongoose = require('mongoose');

const User = require('../../db/user/user-schema');

module.exports = function getusersByEmail(req, res) {
  let email = new RegExp(req.params.email);
  console.log('the emeail', email);
  User.find({'email': {$regex: req.params.email}}, (err, users) => {
    if (err) {
      return res.json('Database error, try again later' );
    }
    res.json(users);
  });
}
