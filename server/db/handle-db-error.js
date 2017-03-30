// ERROR HANDLER
module.exports = function(err, res) {
  console.error('ERROR CONNECTING: ', err);
  res.status(503).send('Database Error');
};
