const request = require('supertest');

describe('/api/employees/id/:id', () => {
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
  
  it('should return a single employee record when passed a known id', (done) => {
      request(server)
        .get('/api/employees/id/b7e0f1cc-4c4f-487c-9d88-258deee52282')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          res.body.data = res.body.data.name.last.toLowerCase();
        })
        .expect(200, {
          data: 'dillard'
        }, done);
  });

  it('should return null when passed an unknown id', (done) => {
      request(server)
        .get('/api/employees/id/58df03977de4c44116c460d5')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, {
          data: null
        }, done);
  });
});