const Employee = require('../../db/Employee/Employee-model');

module.exports = function getEmployeesByPermissions(req, res) {
  Employee.find({ 'permissions': req.params.permissions }, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employees });
  });
}
