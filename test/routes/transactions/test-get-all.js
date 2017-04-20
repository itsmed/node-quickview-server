const request = require('supertest');
const { expect } = require('chai');

describe('/api/transactions/all', () => {
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

  it('should return an array', function(done) {
    request(server)
      .get('/api/transactions/all')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .then(res => {
        expect(Array.isArray(res.body)).to.equal(true);
        done();
      });
  });

  it('should return an array of transactions', function(done) {
    request(server)
      .get('/api/transactions/all')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .then(res => {
        expect(res.body[0].user_id).to.equal('6db4775a-d4b5-4990-baf7-e6f2dc21df32');
        done();
      });
  });
});