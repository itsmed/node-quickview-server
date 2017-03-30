const {
  getAllEmployees,
  getSingleEmployee,
} = require('./employees');
const {
  getAllUsers,
  getSingleUser,
} = require('./users');

const {
  getAllTransactions,
  getSingleTransaction,
} = require('./transactions');

module.exports = {
  getAllEmployees,
  getSingleEmployee,
  getAllUsers,
  getSingleUser,
  getAllTransactions,
  getSingleTransaction,
};
