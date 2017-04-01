const {
  getAllEmployees,
  getSingleEmployee,
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
  getEmployeeByName,
  getEmployeesByPermissions,
  getSingleEmployee,
  getAllUsers,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
};
