const Transaction = require('../../db/transaction/transaction-model');

module.exports = function getSingleTransaction(req, res) {
  Transaction.findOne({ '_id': req.params.id}, (err, transaction) => {
    if (err) {
      return handleDatabaseError(err, res);
    }
    res.json({ data: transaction });
  });
};
