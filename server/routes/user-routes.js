const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const User = require('../db/user/user-model');

function getAllUsers(req, res) {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    User.find((err, users) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      res.json({ data: users });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
}

module.exports = {
  getAllUsers,
};