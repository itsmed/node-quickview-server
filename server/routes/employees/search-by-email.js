const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getEmployeesByEmail(req, res) {
  let email = new RegExp(req.params.email);
  Employee.find({'email': {$regex: req.params.email}}, (err, employees) => {
    if (err) {
      return res.json({ data : 'Database error, try again later' })
    }
    res.json({ data: employees });
  });
}
