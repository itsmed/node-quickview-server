const request = require('supertest')

describe('server', () => {
  let server;

  beforeEach(() => {
    server = require('../app');
  });

  afterEach(() => {
    server.close();
  });

  it('should exist', (done) => {
    request(server)
      .get('/')
      .expect(404);
    done();
  });
});