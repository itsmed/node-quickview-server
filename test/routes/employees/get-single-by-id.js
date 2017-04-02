const request = require('supertest');

describe('/api/employees/id/:id', () => {
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


  it('shoud return a single transaction when passed a known id', (done) => {
      request(server)
        .get('/api/employees/id/58df03437de4c44116c460b4')
        .set('Accept', 'application/json')
        .expect(res => {
          console.log('user id', res.body.data);
          res.body.data = res.body.data.full_name
        })
        .expect(200, {
          data: 'patel higgins'
        }, done);
  });

  xit('should return null when passed an unknown id', (done) => {
      request(server)
        .get('/api/employees/id/58df03977de4c44116c460d5')
        .set('Accept', 'application/json')
        .expect(200, {
          data: null
        }, done);
  });

  xit('should return an error message when a database error occurs', (done) => {
    request(server)
      .get('/api/employees/id/fjsf0a80')
      .set('Accept', 'application/json')
      .expect(200, {
        data: 'Database error, please try again later'
      }, done);
  });
});