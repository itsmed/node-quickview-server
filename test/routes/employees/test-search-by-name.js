const request = require('supertest');

describe('/api/employees/search/name/:name', () => {
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
  
  it('should return an array of employee records when passed a known name', (done) => {
      request(server)
        .get('/api/employees/search/name/george')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'wilder'
        }, done);
  });

  it('should return an empty array when passed an unknown name', (done) => {
      request(server)
        .get('/api/employees/search/name/kimbereleey')
        .set('Accept', 'application/json')
        .expect(200, {
          data: []
        }, done);
  });
});
