const mongoose = require('mongoose');

const Transaction = require('../../db/transaction/transaction-schema');

module.exports = function getAllTransactions(req, res) {
  Transaction.find((err, transactions) => {
    if (err) {
      return res.json('Database error, try again later');
    }
    res.json(transactions);
  });
};

