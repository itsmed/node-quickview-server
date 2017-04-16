const request = require('supertest');

describe('/users', () => {
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


  describe('/api/users/id/:id', () => {
    it('should return a user record when passed a known userId', (done) => {
      request(server)
        .get('/api/users/id/7a5704d7-c44a-4795-aa06-a3c7b6218f8b')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          res.body.data = res.body.data.name.first.toLowerCase();
        })
        .expect(200, {
          data: 'Michele'.toLowerCase()
        }, done);
    });

    it('should return null when passed an unknown userId', (done) => {
      request(server)
        .get('/api/users/id/7a5704d7-c44a-95-aa06-a3c7b6218f8b')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, {
          data: null
        }, done);
    });

    it('should return null when passed an unkown userId', (done) => {
      request(server)
        .get('/api/users/id/82jsl89snfklw')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(200, {
          data: null
        }, done);
    });
  });

});
