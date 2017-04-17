const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function getEmployeesByEmail(req, res) {
  let email = new RegExp(req.params.email);
  console.log('email', email);
  Employee.find({'email': {$regex: req.params.email}}, (err, employees) => {
    if (err) {
      return res.json({ data : 'Database error, try again later' })
    }
    res.json({ data: employees });
  });
}
