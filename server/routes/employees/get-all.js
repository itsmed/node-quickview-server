const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('employee', employeeSchema);

module.exports = function getAllEmployees(req, res) {
  console.log('GETTING ALL EMPLOYEES!!!!!!!!!!!!!');
  Employee.find((err, employees) => {
    if (err) {
      return res.json({ data : 'Database error, try again later' })
    }
    res.json({ data: employees });
  });
};
