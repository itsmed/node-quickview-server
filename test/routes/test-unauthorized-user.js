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
      .get('/api/users/search/email/Horton.Cote@Mobildata.com')
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