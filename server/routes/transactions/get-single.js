const mongoose = require('mongoose');

const transactionSchema = require('../../db/transaction/transaction-schema');
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = function getSingleTransaction(req, res) {
  Transaction.findOne({ '_id': req.params.id}, (err, transaction) => {
    if (err) {
      return res.json({ data: 'Database error, please try again later' });
    }
    res.json({ data: transaction });
  });
};
