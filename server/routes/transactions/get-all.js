const Transaction = require('../../db/transaction/transaction-model');

module.exports = function getAllTransactions(req, res) {
  Transaction.find((err, transactions) => {
    if (err) {
      return handleDatabaseError(err, res);
    }
    res.json({ data: transactions });
  });
};

