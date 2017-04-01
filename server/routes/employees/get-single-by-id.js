const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getSingleEmployee(req, res) {
  Employee.findOne({ 'id': req.params.id}, (err, employee) => {
    if (err) {
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employee });
  });
};
