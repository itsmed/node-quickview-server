const request = require('supertest');

describe('/api/employees/search/email/:email', () => {
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
  
  it('should return an array of employee records when passed a known email', (done) => {
      request(server)
        .get('/api/employees/search/email/acosta.miller@quickview.com')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          console.log('res', res.body, res.data);
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'miller'
        }, done);
  });

  it('should return an empty array when passed an unknown email', (done) => {
      request(server)
        .get('/api/employees/search/email/kimbereleey')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, {
          data: []
        }, done);
  });
});
