'use strict';

var config = require('./configuration'),
    cluster = require('cluster'),
    heartbeat = require('./routes/heartbeat'),
    expression = require('./routes/expression'),
    nconf = require('nconf'),
    restify = require('restify'),
    environment = nconf.get('NODE:ENV') || 'production';


// only cluster if not testing
if (cluster.isMaster && environment != 'test') {
    var cpuCount = require('os').cpus().length;

    for (var i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker) {
        cluster.fork();
    });
}
else {

    var server = restify.createServer({
        name: config.get('application:name')
    });

    // middleware
    server.use(restify.bodyParser());

    // Heartbeat
    server.get('/heartbeat', heartbeat.index);

    // Evaluate expression returned from producer
    server.get('/consume', expression.consume);

    // Mock handlers for tests
    server.post('/mock/produce', function(req, res, next) {
        res.json(201, {'expression': '1+1='});
        next();
    });

    server.post('/mock/report', function(req, res, next) {
        res.json(201, {'success': true});
        next();
    });
    // end mock handlers

    server.listen({
            port: config.get('restify:port'),
            host: config.get('restify:host')
        },
        function() {
            var host = server.address().address,
                port = server.address().port;
            console.log('%s starting up at %s:%s using "%s" environment.', server.name, host, port, environment);
    });
}

module.exports = server;
