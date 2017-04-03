const request = require('supertest');

describe('/api/transactions/user/id/:id', () => {
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
  
  it('should return a list of transactions when passed a known id', (done) => {
      request(server)
        .get('/api/transactions/user/id/58d58096b44a13e78962a9a6')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = Array.isArray(res.body.data)
        })
        .expect(200, {
          data: true
        }, done);
  });

  it('should return an empty array when passed an unknown id', (done) => {
      request(server)
        .get('/api/transactions/user/id/58d58096db7fd098f3865631')
        .set('Accept', 'application/json')
        .expect(200, {
          data: []
        }, done);
  });
});