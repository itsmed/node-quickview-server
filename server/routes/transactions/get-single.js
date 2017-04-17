const mongoose = require('mongoose');

const Transaction = require('../../db/transaction/transaction-schema');

module.exports = function getSingleTransaction(req, res) {
  Transaction.findOne({ 't_id': req.params.id}, (err, transaction) => {
    if (err) {
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: transaction });
  });
};
