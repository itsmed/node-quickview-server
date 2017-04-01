const Employee = require('../../db/Employee/Employee-model');

module.exports = function getEmployeesByEmail(req, res) {
  let email = new RegExp(req.params.email);
  Employee.find({'email': {$regex: req.params.email}}, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employees });
  });
}
