const request = require('supertest');
const app = require('./../app');

describe('GET /phones', function () {
    it('respond with json containing a list of all phones', function (done) {
        request(app)
            .get('/phones')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});