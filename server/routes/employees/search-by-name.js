const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getEmployeeByName(req, res) {
  let name = new RegExp(req.params.name);
  Employee.find({'full_name': {$regex: req.params.name}}, (err, employees) => {
    if (err) {
      return res.json({ data: 'Database error, please try again later' });
    }
    res.json({ data: employees });
  });
}
