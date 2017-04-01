const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getAllEmployees(req, res) {
  Employee.find((err, employees) => {
    if (err) {
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employees });
  });
};
