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

  describe('/api/transactions/id/:id', () => {
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

    it('should return an error message when a database error occurs', (done) => {
      request(server)
        .get('/api/transactions/id/fjsf0a80')
        .set('Accept', 'application/json')
        .expect(200, {
          data: 'Database error, please try again later'
        }, done);
    });
  });

  describe('/api/transactions/user/id/:id', () => {
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
  });
});