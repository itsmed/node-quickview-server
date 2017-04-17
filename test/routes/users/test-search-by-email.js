const request = require('supertest');

describe('/api/users/search/email/:email', () => {
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
  
  it('should return an array of user records when passed a known email', (done) => {
      request(server)
        .get('/api/users/search/email/horton.cote@mobildata.com')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'cote'
        }, done);
  });

  it('should return an empty array when passed an unknown email', (done) => {
      request(server)
        .get('/api/users/search/email/kimbereleey')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, {
          data: []
        }, done);
  });
});
