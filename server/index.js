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
const path = require('path');
const authentication = require('./controllers/authentication');

module.exports = function(app) {
  /**************************************
    /auth routes
  **************************************/
  app.post('/api/auth/signup', authentication.signup);
  app.post('/api/auth/signin', authentication.signin);
  
  /**************************************
    /users routes
  **************************************/
  app.get('/api/users/all', authentication.checkUserToken, getAllUsers);
  app.get('/api/users/id/:id', authentication.checkUserToken, getSingleUser);
  app.get('/api/users/search/email/:email', authentication.checkUserToken, getUsersByEmail);
  app.get('/api/users/search/name/:name', authentication.checkUserToken,  getUserByName);

  /**************************************
    /transaction routes
  **************************************/

  app.get('/api/transactions/all', authentication.checkUserToken,  getAllTransactions);
  app.get('/api/transactions/id/:id', authentication.checkUserToken,  getSingleTransaction)
  app.get('/api/transactions/user/id/:id', authentication.checkUserToken,  getTransactionsByUserId);

  /**************************************
    /employee routes
  **************************************/
  app.get('/api/employees/all', authentication.checkUserToken,  getAllEmployees);
  app.get('/api/employees/id/:id', authentication.checkUserToken,  getSingleEmployee);
  app.get('/api/employees/search/name/:name', authentication.checkUserToken,  getEmployeeByName);
  app.get('/api/employees/search/permissions/:permissions', authentication.checkUserToken,  getEmployeesByPermissions);
  app.get('/api/employees/search/email/:email', authentication.checkUserToken,  getEmployeesByEmail);

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'static', 'index.html')));
}