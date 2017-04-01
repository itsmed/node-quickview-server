const Employee = require('../../db/Employee/Employee-model');

module.exports = function getAllEmployees(req, res) {
  Employee.find((err, employees) => {
    if (err) {
      return handleDatabaseError(err, res);
    }
    res.json({ data: employees });
  });
};
