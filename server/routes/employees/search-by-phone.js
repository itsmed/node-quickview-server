const Employee = require('../../db/Employee/Employee-model');

module.exports = function getEmployeesByPhone(req, res) {
  let phone = new RegExp(req.params.phone);
  Employee.find({'phone': {$regex: req.params.phone}}, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employees });
  });
}
