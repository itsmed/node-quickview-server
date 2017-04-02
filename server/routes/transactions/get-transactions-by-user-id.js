const mongoose = require('mongoose');

const transactionSchema = require('../../db/transaction/transaction-schema');
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = function getTransactionsByUserId(req, res) {
  Transaction.find({ 'user_id': req.params.id}, (err, transaction) => {
    if (err) {
      return res.json({ data: 'Database error, please try again later' });
    }
    res.json({ data: transaction });
  });
};
