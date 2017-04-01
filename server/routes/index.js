const {
  getAllEmployees,
  getSingleEmployee,
  getEmployeeByName,
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
  getSingleEmployee,
  getAllUsers,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
  getTransactionsByUserId,
};
