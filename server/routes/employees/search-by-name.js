const Employee = require('../../db/Employee/Employee-model');

module.exports = function getEmployeeByName(req, res) {
  let name = new RegExp(req.params.name);
  Employee.find({'full_name': {$regex: req.params.name}}, (err, employees) => {
    if (err) {
      console.log('ERROR', err);
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employees });
  });
}
