const getAllUsers = require('./get-all');
const getSingleUser = require('./get-single');
const getUsersByEmail = require('./search-by-email');
const getUserByName = require('./search-by-name');
const getUsersByPhone = require('./search-by-phone');

module.exports = {
  getAllUsers,
  getSingleUser,
  getUsersByEmail,
  getUserByName,
  getUsersByPhone,
};
