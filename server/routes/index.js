const {
  getAllEmployees,
  getSingleEmployee,
  getEmployeesByEmail,
  getEmployeeByName,
  getEmployeesByPermissions,
  getEmployeesByPhone,
} = require('./employees');
const {
  getAllUsers,
  getSingleUser,
  getUsersByEmail,
  getUsersByPhone,
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
  getEmployeesByPhone,
  getSingleEmployee,
  getAllUsers,
  getUserByName,
  getUsersByPhone,
  getUsersByEmail,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
};
