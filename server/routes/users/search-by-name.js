const mongoose = require('mongoose');

const User = require('../../db/user/user-schema');

module.exports = function getUserByName(req, res) {
  let name = new RegExp(req.params.name);
  User.find({'full_name': {$regex: req.params.name}}, (err, employees) => {
    if (err) {
      return res.json('Database error, try again later');
    }
    res.json(employees);
  });
}
