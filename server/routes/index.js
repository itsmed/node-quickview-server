const {
  getAllEmployees,
  getSingleEmployee,
  getEmployeesByEmail,
  getEmployeeByName,
  getEmployeesByPermissions,
} = require('./employees');
const {
  getAllUsers,
  getSingleUser,
} = require('./users');

const {
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
} = require('./transactions');

module.exports = {
  getAllEmployees,
  getEmployeesByEmail,
  getEmployeeByName,
  getEmployeesByPermissions,
  getSingleEmployee,
  getAllUsers,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
};
