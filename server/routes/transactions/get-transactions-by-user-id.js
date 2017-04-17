const mongoose = require('mongoose');

const Transaction = require('../../db/transaction/transaction-schema');

module.exports = function getTransactionsByUserId(req, res) {
  Transaction.find({ 'user_id': req.params.id}, (err, transaction) => {
    if (err) {
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: transaction });
  });
};
