const {
  getSingleEmployee,
  getAllEmployees,
  getAllUsers,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
} = require('./routes');

module.exports = function(app) {

  /**************************************
    /users routes
  **************************************/
  app.get('/api/users/all', getAllUsers);
  app.get('/api/users/id/:id', getSingleUser);

  /**************************************
    /transaction routes
  **************************************/

  app.get('/api/transactions/all', getAllTransactions);
  app.get('/api/transactions/id/:id', getSingleTransaction)


  /**************************************
    /employee routes
  **************************************/
  app.get('/api/employees/all', getAllEmployees);
  app.get('/api/employees/id/:id', getSingleEmployee);
}