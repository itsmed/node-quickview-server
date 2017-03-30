const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const Transaction = require('../../db/transaction/transaction-model');

module.exports = function getAllTransactions(req, res) {
  mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    Transaction.find((err, transactions) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      res.json({ data: transactions });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!'));
};

