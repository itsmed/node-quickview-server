const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const User = require('../db/user/user-model');

function getAllUsers(req, res) {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => User.handleDatabaseError(err, res));
  db.once('open', () => {
    User.find((err, users) => {
      if (err) {
        return User.handleDatabaseError(err, res);
      }
      res.json({ data: users });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
}

function getSingleUser(req, res) {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;
  console.log('user by id', req.params.id, typeof req.params.id);
  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    User.findOne({ '_id': req.params.id}, (err, user) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      console.log('found: ', user);
      res.json({ data: user });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
}

module.exports = {
  getAllUsers,
  getSingleUser,
};