const {
  getSingleEmployee,
  getAllEmployees,
  getEmployeesByEmail,
  getEmployeeByName,
  getEmployeesByPermissions,
  getEmployeesByPhone,
  getAllUsers,
  getSingleUser,
  getUsersByEmail,
  getUserByName,
  getUsersByPhone,
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
} = require('./routes');

module.exports = function(app) {

  /**************************************
    /users routes
  **************************************/
  app.get('/api/users/all', getAllUsers);
  app.get('/api/users/id/:id', getSingleUser);
  app.get('/api/users/search/email/:email', getUsersByEmail);
  app.get('/api/users/search/name/:name', getUserByName);
  app.get('/api/users/search/phone/:phone', getUsersByPhone);

  /**************************************
    /transaction routes
  **************************************/

  app.get('/api/transactions/all', getAllTransactions);
  app.get('/api/transactions/id/:id', getSingleTransaction)
  app.get('/api/transactions/user/id/:id', getTransactionsByUserId);

  /**************************************
    /employee routes
  **************************************/
  app.get('/api/employees/all', getAllEmployees);
  app.get('/api/employees/id/:id', getSingleEmployee);
  app.get('/api/employees/search/name/:name', getEmployeeByName);
  app.get('/api/employees/search/permissions/:permissions', getEmployeesByPermissions);
  app.get('/api/employees/search/email/:email', getEmployeesByEmail);
  app.get('/api/employees/search/phone/:phone', getEmployeesByPhone);
}