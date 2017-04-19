const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function getSingleEmployee(req, res) {
  Employee.findOne({ 'empId': req.params.id}, (err, employee) => {
    if (err) {
      return res.json('Database error, try again later');
    }
    res.json(employee);
  });
};
