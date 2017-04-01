const getAllEmployees = require('./get-all');
const getSingleEmployee = require('./get-single-by-id');
const getEmployeeByName = require('./search-by-name');
const getEmployeesByPermissions = require('./search-by-permissions');
const getEmployeesByEmail = require('./search-by-email');
const getEmployeesByPhone = require('./search-by-phone');

module.exports = {
  getAllEmployees,
  getEmployeesByEmail,
  getEmployeeByName,
  getEmployeesByPermissions,
  getEmployeesByPhone,
  getSingleEmployee,
};
