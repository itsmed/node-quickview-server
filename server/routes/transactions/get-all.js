const mongoose = require('mongoose');

const transactionSchema = require('../../db/transaction/transaction-schema');
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = function getAllTransactions(req, res) {
  Transaction.find((err, transactions) => {
    if (err) {
      return Transaction.handleDatabaseError(err, res);
    }
    res.json({ data: transactions });
  });
};

