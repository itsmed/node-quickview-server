const request = require('supertest');
const { expect } = require('chai');

describe('/api/users/name/:name', () => {
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

  it('should return an array when passed a known name', (done) => {
      request(server)
        .get('/api/users/name/carver')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(res => {
          expect(Array.isArray(res.body)).to.equal(true);
          done();
        });
  });
  
  it('should return an array of expected employee records when passed a known name', (done) => {
      request(server)
        .get('/api/users/name/wong')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .then(res => {
          expect(res.body[0].name.first.toLowerCase()).to.equal('cooley');
          done();
        })
  });

  it('should return an empty array when passed an unknown name', (done) => {
      request(server)
        .get('/api/users/name/cyndi')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, [], done);
  });
});
