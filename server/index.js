const {
  getAllUsers,
  getSingleUser,
} = require('./routes/user-routes');

const {
  getAllTransactions,
  getSingleTransaction,
} = require('./routes/transaction-routes');

module.exports = function(app) {
  app.get('/api/users/all', getAllUsers);
  app.get('/api/users/id/:id', getSingleUser);
  app.get('/api/transactions/all', getAllTransactions);
  app.get('/api/transactions/id/:id', getSingleTransaction)
}