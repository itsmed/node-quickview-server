const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function getAllEmployees(req, res) {
  Employee.find((err, employees) => {
    if (err) {
      return res.json('Database error, try again later');
    }
    res.json(employees);
  });
};
