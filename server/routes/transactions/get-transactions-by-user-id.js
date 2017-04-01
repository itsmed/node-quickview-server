const mongoose = require('mongoose');

const transactionSchema = require('../../db/transaction/transaction-schema');
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = function getTransactionsByUserId(req, res) {
  Transaction.find({ 'user_id': req.params.id}, (err, transaction) => {
    if (err) {
      return Transaction.handleDatabaseError(err, res);
    }
    res.json({ data: transaction });
  });
};
