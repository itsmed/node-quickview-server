const request = require('supertest');

describe('/api/users/search/email/:email', () => {
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
  
  it('should return an array of user records when passed a known email', (done) => {
      request(server)
        .get('/api/users/search/email/curtis.fisher@xymonk.name')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'fisher'
        }, done);
  });

  it('should return an empty array when passed an unknown email', (done) => {
      request(server)
        .get('/api/users/search/email/kimbereleey')
        .set('Accept', 'application/json')
        .expect(200, {
          data: []
        }, done);
  });
});
