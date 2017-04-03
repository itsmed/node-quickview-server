const request = require('supertest');

describe('/api/users/all', () => {
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
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = Array.isArray(res.body.data);
      })
      .expect(200, {
        data: true
      }, done);
  });


  it('should return an array of users', function(done) {
    request(server)
      .get('/api/users/all')
      .set('Accept', 'application/json')
      .expect(res => {
        res.body.data = res.body.data[0].full_name.toLowerCase();
      })
      .expect(200, {
        data: 'melendez randolph'
      }, done);
  });
});
