const request = require('supertest');

describe('/api/employees/search/name/:name', () => {
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
          console.log('err', err.message);
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
  
  it('should return an array of employee records when passed a known name', (done) => {
      request(server)
        .get('/api/employees/search/name/norris')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'gallagher'
        }, done);
  });

  it('should return an empty array when passed an unknown name', (done) => {
      request(server)
        .get('/api/employees/search/name/kimbereleey')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, {
          data: []
        }, done);
  });
});
