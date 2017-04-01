const request = require('supertest');

describe('Test Setup', () => {
  let server;
  let connection;

  beforeEach(() => {
    delete require.cache[require.resolve('../app')];
    delete require.cache[require.resolve('../server/db/db')];
    server = require('../app');
    let { db } = require('../server/db/db');
    connection = db.connection;
  });

  afterEach(() => {
    server.close();
    connection.close();
  });


  it('should exist', (done) => {
    request(server)
      .get('/')
      .expect(404)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
