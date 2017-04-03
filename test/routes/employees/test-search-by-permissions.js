const request = require('supertest');

describe('/api/employees/search/permissions/:permissions', () => {
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
  
  it('should return an array of employee records when passed a permission', (done) => {
      request(server)
        .get('/api/employees/search/permissions/7')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'vargas'
        }, done);
  });

  it('should return an array of employees when passed a permission', (done) => {
      request(server)
        .get('/api/employees/search/permissions/5')
        .set('Accept', 'application/json')
        .expect(res => {
          res.body.data = res.body.data.length
        })
        .expect(200, {
          data: 4
        }, done);
  });

  it('should return an empty array if no employees with that persmission are found', (done) => {
    request(server)
      .get('/api/employees/search/permissions/234')
      .set('Accept', 'application/json')
      .expect(200, {
        data: []
      }, done);
  });
});