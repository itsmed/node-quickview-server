const mongoose = require('mongoose');

const employeeSchema = require('../../db/employee/employee-schema');
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = function getEmployeesByPermissions(req, res) {
  Employee.find({ 'permissions': req.params.permissions }, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: employees });
  });
}
