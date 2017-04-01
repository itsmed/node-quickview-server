const Employee = require('../../db/Employee/Employee-model');

module.exports = function getSingleEmployee(req, res) {
  Employee.findOne({ 'id': req.params.id}, (err, employee) => {
    if (err) {
      return Employee.handleDatabaseError(err, res);
    }
    res.json({ data: employee });
  });
};
