const request = require('supertest');

describe('/api/transactions/all', () => {
  let server;
  let connection;

  beforeEach(() => {
    delete require.cache[require.resolve('../../../app')];
    delete require.cache[require.resolve('../../../server/db/db')];
    server = require('../../../app');
    let db = require('../../../server/db/db');
    connection = db.connection;
  });

  afterEach(() => {
    server.close();
    connection.close();
  });

  it('should return an array', function(done) {
    request(server)
      .get('/api/transactions/all')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = Array.isArray(res.body.data);
      })
      .expect(200, {
        data: true
      }, done);
  });

  it('should return an array of transactions', function(done) {
    request(server)
      .get('/api/transactions/all')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = res.body.data[0].user_id
      })
      .expect(200, {
        data: '58d580960a7d83fec3f5db6b'
      }, done);
  });
});