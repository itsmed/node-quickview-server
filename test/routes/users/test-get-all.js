const request = require('supertest');

const getToken = require('../../helpers/get-token');

describe('/api/users/all', () => {
  let server;
  let db;
  let token;

  beforeEach((d) => {
    delete require.cache[require.resolve('../../../app')];
    delete require.cache[require.resolve('../../../server/db/db')];
    
    server = require('../../../app');
    db = require('../../../server/db/db');
    request(server)
      .post('/api/auth/signin')
      .send({
        username: 'test1',
        password: 'test'
      })
      .end((err, res) => {
        if(err) {
          
          d(err.message);
        }
        token = res.body.token;

        res.body = {data: res.body.token === null};
        d();
      })
  });

  afterEach(() => {
    server.close();
    db.close();
    token = null ;
  });

  it('should return a json array', (done) => {
      
    request(server)
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .expect(res => {
        res.body.data = res === null
      })
      .expect(200, {
        data: false
      }, done);
  });


  it('should return an array of users', function(done) {
    request(server)
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .expect(res => {
        res.body.data = Array.isArray(res.body.data);
      })
      .expect(200, {
        data: true
      }, done);
  });
});
