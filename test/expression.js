'use strict';

var app = require('../app'),
    request = require('supertest');


describe('Expression Consumer', function() {
    describe('When requesting resource /consume', function() {
        it('should respond with Http 200', function(done) {
            request(app)
                .get('/consume')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});