const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function createNewEmployee(req, res) {
  const { permissions, name, picture, isActive } = req.body.new_employee;
  let employee = {
    empId: randId(),
    index: Math.floor(Math.random() * 30) + 20,
    isActive,
    name: {
      first: name.first,
      last: name.last
    },
    picture,
    permissions,
    email: name.first.concat(name.last, '@quickview.com'),
    company: 'quickview'
  }
};


function randId() {
  return Math.random() * 120;
}
