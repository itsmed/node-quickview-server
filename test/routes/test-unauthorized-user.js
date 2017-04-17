const request = require('supertest');

describe('unauthorized users should not hve access to any api routes', () => {
  let server;
  let db;

  beforeEach(() => {
    delete require.cache[require.resolve('../../app')];
    delete require.cache[require.resolve('../../server/db/db')];
    server = require('../../app');
    db = require('../../server/db/db');
  });

  afterEach(() => {
    server.close();
    db.close();
  });

  describe('/users routes', () => {
    it('/api/users/all', (done) => {
      request(server)
        .get('/api/users/all')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/users/id/:id', (done) => {
      request(server)
        .get('/api/users/id/7a5704d7-c44a-4795-aa06-a3c7b6218f8b')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/users/search/email/:email', (done) => {
      request(server)
        .get('/api/users/search/email/horton.cote@mobildata.com')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/users/search/name/:name', (done) => {
      request(server)
        .get('/api/users/search/name/cote')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/users/search/permissions/:permissions', (done) => {
      request(server)
        .get('/api/users/search/email/7')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });
  });

  describe('/employees routes', () => {
    it('/api/employees/all', (done) => {
      request(server)
        .get('/api/employees/all')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/employees/id/:id', (done) => {
      request(server)
        .get('/api/employees/id/7a5704d7-c44a-4795-aa06-a3c7b6218f8b')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/employees/search/email/:email', (done) => {
      request(server)
        .get('/api/employees/search/email/horton.cote@mobildata.com')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/employees/search/name/:name', (done) => {
      request(server)
        .get('/api/employees/search/name/cote')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });
  });

  describe('/transactions', () => {
    it('/api/transactions/all', (done) => {
      request(server)
        .get('/api/transactions/all')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/transactions/id/:id', (done) => {
      request(server)
        .get('/api/transactions/id/7a5704d7-c44a-4795-aa06-a3c7b6218f8b')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });

    it('/api/transactions/user/id/:id', (done) => {
      request(server)
        .get('/api/transactions/user/id/fnau89fsfks-t23-fc2jefs')
        .set('Accept', 'application/json')
        .expect(200, {
          error: 'Unauthorized'
        }, done);
    });


  });

});