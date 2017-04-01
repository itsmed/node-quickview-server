const getAllEmployees = require('./get-all');
const getSingleEmployee = require('./get-single-by-id');
const getEmployeeByName = require('./search-by-name');
const getEmployeesByPermissions = require('./search-by-permissions');

module.exports = {
  getAllEmployees,
  getEmployeeByName,
  getEmployeesByPermissions,
  getSingleEmployee,
};
