const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function getEmployeeByName(req, res) {
  let name = new RegExp(req.params.name);
  Employee.find({'full_name': {$regex: req.params.name}}, (err, employees) => {
    if (err) {
      return res.json('Database error, try again later');
    }
    res.json(employees);
  });
}
