'use strict';
const request = require('supertest');
const mock = require('egg-mock');
const assert = require('assert');

describe('test/app/controller/user.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  afterEach(mock.restore);

  it('should GET /api/v2/users', function* () {
    const r = yield request(app.callback())
            .get('/api/v2/users')
            .expect(200);

    assert(Array.isArray(r.body));
    assert(typeof r.body[0].password === 'string');
  });
  it('should GET /api/v2/users/:id', function* () {
    const r = yield request(app.callback())
            .get('/api/v2/users/58d8aab332db1b63280308fe')
            .expect(200);

    assert(!Array.isArray(r.body));
    assert(typeof r.body.name === 'undefined');
    assert(r.body.password === 'hahah');
  });
});
