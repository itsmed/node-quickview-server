const Employee = require('../../db/Employee/Employee-model');

module.exports = function getEmployeesByEmail(req, res) {
  let email = new RegExp(req.params.email);
  Employee.find({'full_name': {$regex: req.params.email}}, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return Employee.handleDatabaseError(err, res);
    }
    console.log('em', employees);
    res.json({ data: employees });
  });
}
