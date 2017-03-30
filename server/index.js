const {
  getAllUsers,
  getSingleUser
} = require('./routes/user-routes');

module.exports = function(app) {
  app.get('/api/users/all', getAllUsers);
  app.get('/api/users/id/:id', getSingleUser);
}