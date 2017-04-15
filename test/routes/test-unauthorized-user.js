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

  it('/api/users/all', (done) => {
    request(server)
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .expect(200, {
        error: 'Unauthorized'
      }, done);
  });
  it('/api/transactions/all', (done) => {
    request(server)
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .expect(200, {
        error: 'Unauthorized'
      }, done);
  });
  it('/api/employees/all', (done) => {
    request(server)
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .expect(200, {
        error: 'Unauthorized'
      }, done);
  });
  // it('/api/users/all', (done) => {
  //   request(server)
  //     .get('/api/users/all')
  //     .set('Accept', 'application/json')
  //     .expect(200, {
  //       error: 'Unauthorized'
  //     }, done);
  // });
  // it('/api/users/all', (done) => {
  //   request(server)
  //     .get('/api/users/all')
  //     .set('Accept', 'application/json')
  //     .expect(200, {
  //       error: 'Unauthorized'
  //     }, done);
  // });
  // it('/api/users/all', (done) => {
  //   request(server)
  //     .get('/api/users/all')
  //     .set('Accept', 'application/json')
  //     .expect(200, {
  //       error: 'Unauthorized'
  //     }, done);
  // });
  // it('/api/users/all', (done) => {
  //   request(server)
  //     .get('/api/users/all')
  //     .set('Accept', 'application/json')
  //     .expect(200, {
  //       error: 'Unauthorized'
  //     }, done);
  // });
  // it('/api/users/all', (done) => {
  //   request(server)
  //     .get('/api/users/all')
  //     .set('Accept', 'application/json')
  //     .expect(200, {
  //       error: 'Unauthorized'
  //     }, done);
  // });
  // it('/api/users/all', (done) => {
  //   request(server)
  //     .get('/api/users/all')
  //     .set('Accept', 'application/json')
  //     .expect(200, {
  //       error: 'Unauthorized'
  //     }, done);
  // });

});