'use strict';

var app = require('../app'),
    request = require('supertest');


describe('Expression Producer Heartbeat', function() {
    describe('When requesting resource /heartbeat', function() {
        it('should respond with Http 200', function(done) {
            request(app)
                .get('/heartbeat')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('When requesting a missing resource', function() {
        it('should respond with a 404', function(done) {
            request(app)
                .get('/missing')
                .expect(404, done);
        });
    });
});