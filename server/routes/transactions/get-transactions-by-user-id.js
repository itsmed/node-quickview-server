const Transaction = require('../../db/transaction/transaction-model');

module.exports = function getTransactionsByUserId(req, res) {
  Transaction.find({ 'user_id': req.params.id}, (err, transaction) => {
    if (err) {
      return handleDatabaseError(err, res);
    }
    res.json({ data: transaction });
  });
};
