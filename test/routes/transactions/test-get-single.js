const request = require('supertest');
const { expect } = require('chai');

describe('/api/transactions/id/:id', () => {
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
  
  it('should return a single transaction record when passed a known id', (done) => {
      request(server)
        .get('/api/transactions/id/58d5809670ae528a0d07f505')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(res => {
          expect(res.body.user_id).to.equal('616cb4d5-55b1-47f5-93a4-6e6f269abe64')
          done();
        });
  });

  it('should return null when passed an unknown id', (done) => {
      request(server)
        .get('/api/transactions/id/58df03977de4c44116c460d5')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, null, done);
  });
});