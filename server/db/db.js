require('dotenv').config();
const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.TEST_DB_URL : PROD_DB_URL;

mongoose.connect(connectionUrl);

const db = mongoose.connection;
db.on('error', () => console.error('error connecting to db'))
db.once('open', () => console.log('db connected'))

module.exports = db;
