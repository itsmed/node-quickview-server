const request = require('supertest');

describe('/api/transactions/id/:id', () => {
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
  
  it('shoud return a single transaction when passed a known id', (done) => {
      request(server)
        .get('/api/transactions/id/58dc8f69d769f4e31e911bad')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data._id
        })
        .expect(200, {
          data: '58dc8f69d769f4e31e911bad'
        }, done);
  });

  it('should return null when passed an unknown id', (done) => {
      request(server)
        .get('/api/transactions/id/58df03977de4c44116c460d5')
        .set('Accept', 'application/json')
        .expect(200, {
          data: null
        }, done);
  });
});