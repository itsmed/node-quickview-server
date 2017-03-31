require('dotenv').config();
const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const db = mongoose.connect(connectionUrl);

function handleDatabaseError(err, res) {
  console.error('ERROR CONNECTING: ', err);
  res.status(503).send('Database Error');
};

module.exports = {
  db,
  handleDatabaseError,
};
