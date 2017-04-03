const mongoose = require('mongoose');

const transactionSchema = require('../../db/transaction/transaction-schema');
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = function getAllTransactions(req, res) {
  Transaction.find((err, transactions) => {
    if (err) {
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: transactions });
  });
};

