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
  getUsersByEmail,
  getUserByName,
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
  getUserByName,
  getUsersByEmail,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
};
