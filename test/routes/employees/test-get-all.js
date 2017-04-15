const request = require('supertest');

describe('/api/employees/all', () => {
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

  it('should return a json array', (done) => {
    request(server)
      .get('/api/employees/all')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = Array.isArray(res.body.data);
      })
      .expect(200, {
        data: true
      }, done);
  });


  it('should return an array of employees', function(done) {
    request(server)
      .get('/api/employees/all')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = res.body.data[0].name.last.toLowerCase();
      })
      .expect(200, {
        data: 'carroll'
      }, done);
  });
});
