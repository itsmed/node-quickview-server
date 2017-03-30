const {
  getAllTransactions,
  getSingleTransaction,
} = require('./routes/transaction-routes');

const {
  getSingleEmployee,
  getAllEmployees,
  getAllUsers,
  getSingleUser,
} = require('./routes');

module.exports = function(app) {
  app.get('/api/users/all', getAllUsers);
  app.get('/api/users/id/:id', getSingleUser);
  app.get('/api/transactions/all', getAllTransactions);
  app.get('/api/transactions/id/:id', getSingleTransaction)


  /**************************************
    /employee routes
  **************************************/
  app.get('/api/employees/all', getAllEmployees);
  app.get('/api/employees/id/:id', getSingleEmployee);
}