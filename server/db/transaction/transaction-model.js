const mongoose = require('mongoose');

const handleDatabaseError = '../handle-db-error';

const transactionSchema = mongoose.Schema({
  id: String,
  index: Number,
  guid: String,
  amount: String,
  user_id: String,
  date: String
});

transactionSchema.methods.handleDatabaseError = handleDatabaseError;

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;