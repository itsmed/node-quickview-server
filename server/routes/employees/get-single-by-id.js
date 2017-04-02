const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getSingleEmployee(req, res) {
  Employee.findOne({ 'id': req.params.id}, (err, employee) => {
    if (err) {
      return res.json({ data: 'Database error, please try again later' });
    }
    res.json({ data: employee });
  });
};
