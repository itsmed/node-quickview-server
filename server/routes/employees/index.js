const getAllEmployees = require('./get-all');
const getEmployeeByName = require('./search-by-name');
const getSingleEmployee = require('./get-single-by-id');

module.exports = {
  getAllEmployees,
  getEmployeeByName,
  getSingleEmployee,
};
