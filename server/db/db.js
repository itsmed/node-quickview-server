require('dotenv').config();
const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

mongoose.connect(connectionUrl);

const db = mongoose.connection;
db.on('error', () => console.error('error connecting to db'))
db.once('open', () => console.log('db connected'))

module.exports = db;
