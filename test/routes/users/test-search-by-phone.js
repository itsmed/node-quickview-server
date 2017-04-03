const request = require('supertest');

describe('/api/users/search/phone/:phone', () => {
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
  
  it('should return an array of employee records when passed a known phone', (done) => {
      request(server)
        .get('/api/users/search/phone/32')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'blanchard'
        }, done);
  });

  it('should return an empty array when passed an unknown phone', (done) => {
      request(server)
        .get('/api/users/search/phone/9963637373')
        .set('Accept', 'application/json')
        .expect(200, {
          data: []
        }, done);
  });
});
