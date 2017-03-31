const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const Transaction = require('../../db/transaction/transaction-model');

module.exports = function getTransactionsByUserId(req, res) {
 mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    Transaction.find({ 'user_id': req.params.id}, (err, transaction) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      res.json({ data: transaction });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!')); 
};