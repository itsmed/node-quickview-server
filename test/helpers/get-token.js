const axios = require('axios')

module.exports = function getToken() {
  return axios.post('/api/auth/signin')
    .send({
      username: 'test1',
      password: 'test'
    })
    .then((res) => {
      // token = res.body.token;
      console.log('holy helper batman', res.body.token);
      // res.body = {data: res.body.token === null};
      // d();
    })
    .catch(err => {
      console.log('fuck it', err.message);
    });
};
