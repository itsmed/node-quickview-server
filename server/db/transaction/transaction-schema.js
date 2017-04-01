const mongoose = require('mongoose');
const { db, handleDatabaseError } = require('../db');

const transactionSchema = mongoose.Schema({
  id: String,
  index: Number,
  guid: String,
  amount: String,
  user_id: String,
  date: String
});

transactionSchema.methods.handleDatabaseError = handleDatabaseError;

module.exports = transactionSchema;