'use strict';

var config = require('./configuration'),
    nconf = require('nconf'),
    restify = require('restify'),
    environment = nconf.get('NODE:ENV') || 'production';


var server = restify.createServer({
    name: config.get('application:name')
});

// middleware
server.use(restify.bodyParser());

server.listen({
        port: config.get('restify:port'),
        host: config.get('restify:host')
    },
    function() {
        var host = server.address().address,
            port = server.address().port;
        console.log('%s starting up at %s:%s using "%s" environment.', server.name, host, port, environment);
});

module.exports = server;
