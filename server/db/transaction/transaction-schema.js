const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  id: String,
  index: Number,
  guid: String,
  amount: Number,
  user_id: String,
  date: String
});

module.exports = transactionSchema;
