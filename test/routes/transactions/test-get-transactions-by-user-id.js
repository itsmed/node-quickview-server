const request = require('supertest');
const { expect } = require('chai');

describe('/api/transactions/user_id/:id', () => {
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
  
  it('should return a list of transactions when passed a known id', (done) => {
      request(server)
        .get('/api/transactions/user_id/7a5704d7-c44a-4795-aa06-a3c7b6218f8b')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(res => {
          expect(Array.isArray(res.body)).to.equal(true)
          expect(res.body[0].amount).to.equal(326.42);
          done();
        });
  });

  it('should return an empty array when passed an unknown id', (done) => {
      request(server)
        .get('/api/transactions/user_id/58d58096db7fd098f3865631')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, [], done);
  });
});