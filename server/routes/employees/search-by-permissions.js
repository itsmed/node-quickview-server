const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function getEmployeesByPermissions(req, res) {
  Employee.find({ 'permissions': req.params.permissions }, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return res.json({ data: 'Database error, try again later' });
    }
    res.json({ data: employees });
  });
}
