const request = require('supertest');

describe('/api/employees/id/:id', () => {
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
  
  it('should return a single employee record when passed a known id', (done) => {
      request(server)
        .get('/api/employees/id/58df03437de4c44116c460ba')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data.name.last.toLowerCase();
        })
        .expect(200, {
          data: 'cardenas'
        }, done);
  });

  it('should return null when passed an unknown id', (done) => {
      request(server)
        .get('/api/employees/id/58df03977de4c44116c460d5')
        .set('Accept', 'application/json')
        .expect(200, {
          data: null
        }, done);
  });
});