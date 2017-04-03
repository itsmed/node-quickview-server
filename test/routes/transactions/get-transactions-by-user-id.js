const request = require('supertest');

describe('/api/transactions/user/id/:id', () => {
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


  it('should return a list of transactions when passed a known user_id', (done) => {
    request(server)
      .get('/api/transactions/user/id/:id')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = Array.isArray(res.body.data);
      })
      .expect(200, {
        data: true
      }, done);
  });

  it('should return a list of transactions that belong to a single user', done => {
    request(server)
      .get('/api/transactions/user/id/58d58096aaf1e4119144f41f')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = res.body.data.every(t => t.user_id === '58d58096aaf1e4119144f41f');
      })
      .expect(200, {
        data: true
      }, done);
  });

  it('should return a list of transactions that only belong to a single user', done => {
    request(server)
      .get('/api/transactions/user/id/58d58096aaf1e4119144f41f')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = res.body.data.some(t => t.user_id !== '58d58096aaf1e4119144f41f');
      })
      .expect(200, {
        data: false
      }, done);
  });
});