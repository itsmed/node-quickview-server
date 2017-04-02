const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getEmployeesByPhone(req, res) {
  let phone = new RegExp(req.params.phone);
  Employee.find({'phone': {$regex: req.params.phone}}, (err, employees) => {
    if (err) {
      return res.json({ data: 'Database error, please try again later' });
    }
    res.json({ data: employees });
  });
}
