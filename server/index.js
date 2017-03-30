const { getAllUsers } = require('./routes/user-routes');

module.exports = function(app) {
  app.get('/api/users/all', getAllUsers);
}