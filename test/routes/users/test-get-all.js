const request = require('supertest');
const { expect } = require('chai');

describe('/api/users/all', () => {
  let server;
  let db;

  beforeEach(() => {
    delete require.cache[require.resolve('../../../app')];
    delete require.cache[require.resolve('../../../server/db/db')];
    
    server = require('../../../app');
    db = require('../../../server/db/db');
  });

  afterEach(() => {
    server.close();
    db.close();
  });

  describe('unauthorized users', () => {
    it('/api/users/all returns an unauthorized message', (done) => {
      request(server)
        .get('api/users/all')
        .set('Accept', 'application/json')
        .set('Authorization', '')
        .expect(200, {
          error: 'Unauthorized'
        });
        done();
    });
  });

  describe('authorized users', () => {
    let token;

    beforeEach((d) => {
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
      token = null ;
    });

    it('should return a json array', (done) => {
      let data;
      request(server)
        .get('/api/users/all')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(res => {
          data = Array.isArray(res.body);
          expect(data).to.equal(true);
          done();
        });
    });


    it('should return an array of users', function(done) {
    let data; 
      request(server)
        .get('/api/users/all')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(res => {
          data = res.body[0].name.last;
          expect(data).to.equal('sweeney');
          done();
        });
    });
  });
});
