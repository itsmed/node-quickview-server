const request = require('supertest');

describe('/transactions', () => {
  let server;
  let connection;

  beforeEach(() => {
    delete require.cache[require.resolve('../../app')];
    delete require.cache[require.resolve('../../server/db/db')];
    server = require('../../app');
    let { db } = require('../../server/db/db');
    connection = db.connection;
  });

  afterEach(() => {
    server.close();
    connection.close();
  });

  describe('/api/transactions/all', () => {
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
  });
});