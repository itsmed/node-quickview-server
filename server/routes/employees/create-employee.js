const mongoose = require('mongoose');

const Employee = require('../../db/employee/employee-schema');

module.exports = function createNewEmployee(req, res) {
  const { permissions, name, picture, isActive } = req.body.new_employee;
  const email = name.first.concat(name.last, '@quickview.com');
  const employee = {
    empId: randId(),
    index: Math.floor(Math.random() * 30) + 20,
    isActive,
    name: {
      first: name.first,
      last: name.last
    },
    picture,
    permissions,
    email,
    company: 'quickview'
  }

  Employee.findOne({ email }, (err, docs) => {
    if (err) {
      throw err;
      // @TODO: REAL ERROR HANDLING
    }
    if (docs) {
      return res.json({message: 'Employee already exists!'});
    }

    const e = new Employee(employee);
  });
};


function randId() {
  return Math.random() * 120;
}
