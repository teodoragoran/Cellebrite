const request = require('supertest');
const app = require('../app');

describe('GET /api/phones', function () {
    it('respond with json containing a list of all phones', function (done) {
        request(app)
            .get('/api/phones')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /api/phones', function () {
    let data = {
        "type": "mobile",
        "serial": "serialno",
        "color": "black",
        "property": "{'owner':'owner name'}"
    }
    it('respond with 201 created', function (done) {
        request(app)
            .post('/api/phones')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /api/phones', function () {
    let data = {
        "type": "mobile",
        "serial": "serialno",
        "color": "black",
        "proprietary": "{'owner':owner name'}"
    };
    it('respond with Unprocessable entity', function (done) {
        request(app)
            .post('/api/phones')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('DELETE /api/phones', function () {
    let data = {
        "type": "mobile",
        "serial": "serialno",
        "color": "black",
        "proprietary": "{'owner':owner name'}"
    };
    it('respond with Unprocessable entity', function (done) {
        request(app)
            .post('/api/phones')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});