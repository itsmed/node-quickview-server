const request = require('supertest');

describe('/users', () => {
  let server;
  let connection;

  beforeEach(() => {
    delete require.cache[require.resolve('../../../app')];
    delete require.cache[require.resolve('../../../server/db/db')];
    server = require('../../../app');
    let { db } = require('../../../server/db/db');
    connection = db.connection;
  });

  afterEach(() => {
    server.close();
    connection.close();
  });


  describe('/api/users/id/:id', () => {
    it('shold return a user record when passed a known id', (done) => {
      request(server)
        .get('/api/users/id/58df03977de4c44116c460cf')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data.full_name.toLowerCase();
        })
        .expect(200, {
          data: 'Jan Sparks'.toLowerCase()
        }, done);
    });

    it('should return null when passed an unknown id', (done) => {
      request(server)
        .get('/api/users/id/58d5809697c7c1a23244f8a4')
        .set('Accept', 'application/json')
        .expect(200, {
          data: null
        }, done);
    });

    it('should gracefully handle an error', (done) => {
      request(server)
        .get('/api/users/id/f9s')
        .set('Accept', 'application/json')
        .expect(200, {
          data: 'Database error, try again later'
        }, done);
    });
  });

});