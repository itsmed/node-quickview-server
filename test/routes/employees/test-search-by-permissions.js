const request = require('supertest');

describe('/api/employees/search/permissions/:permissions', () => {
  let server;
  let db;
  let token;

  beforeEach((d) => {
    delete require.cache[require.resolve('../../../app')];
    delete require.cache[require.resolve('../../../server/db/db')];
    
    server = require('../../../app');
    db = require('../../../server/db/db');
    request(server)
      .post('/api/auth/signin')
      .send({
        username: 'test1',
        password: 'test'
      })
      .end((err, res) => {
        if(err) {
          console.log('err', err.message);
          d(err.message);
        }
        token = res.body.token;

        res.body = {data: res.body.token === null};
        d();
      })
  });

  afterEach(() => {
    server.close();
    db.close();
    token = null ;
  });
  
  it('should return an array of employee records when passed a permission', (done) => {
      request(server)
        .get('/api/employees/search/permissions/7')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          res.body.data = res.body.data[0].name.last.toLowerCase();
        })
        .expect(200, {
          data: 'day'
        }, done);
  });

  it('should return an array of employees when passed a permission', (done) => {
      request(server)
        .get('/api/employees/search/permissions/5')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .expect(res => {
          res.body.data = res.body.data.length
        })
        .expect(200, {
          data: 1 
        }, done);
  });

  it('should return an empty array if no employees with that persmission are found', (done) => {
    request(server)
      .get('/api/employees/search/permissions/234')
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .expect(200, {
        data: []
      }, done);
  });
});