require('dotenv').config();
const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const db = mongoose.connect(connectionUrl);

module.exports = {
  db
};
