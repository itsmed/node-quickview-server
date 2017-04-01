const getAllEmployees = require('./get-all');
const getSingleEmployee = require('./get-single-by-id');
const getEmployeeByName = require('./search-by-name');
const getEmployeesByPermissions = require('./search-by-permissions');
const getEmployeesByEmail = require('./search-by-email');

module.exports = {
  getAllEmployees,
  getEmployeesByEmail,
  getEmployeeByName,
  getEmployeesByPermissions,
  getSingleEmployee,
};
