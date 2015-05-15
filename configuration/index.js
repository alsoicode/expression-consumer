'use strict';

var nconf = require('nconf'),
    env = require('dotenv').load();

function Config() {
    nconf.argv().env('_');
    var environment = nconf.get('NODE:ENV') || 'production';
    nconf.file(environment, 'settings/' + environment + '.json');
}

Config.prototype.get = function(key) {
    return nconf.get(key);
}

module.exports = new Config();
