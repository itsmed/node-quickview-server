const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function createNewEmployee(req, res) {
  const { username, permissions, name, picture } = req.body;
};
