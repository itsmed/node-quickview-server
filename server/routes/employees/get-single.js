const mongoose = require('mongoose');
const connectionUrl = process.env.NODE_ENV === 'development' ? 
  process.env.test_db_connection_url : prod_db_connection_url;

const Employee = require('../../db/Employee/Employee-model');

module.exports = function getSingleEmployee(req, res) {
 mongoose.connect(connectionUrl);
  let db = mongoose.connection;

  db.on('error', err => handleDatabaseError(err, res));
  db.once('open', () => {
    Employee.findOne({ 'id': req.params.id}, (err, employee) => {
      if (err) {
        return handleDatabaseError(err, res);
      }
      res.json({ data: employee });
      db.close();
    });
  });
  db.on('disconnected', () => console.log('DB DISCONNECTED!')); 
};
