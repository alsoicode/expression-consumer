'use strict';

var config = require('../configuration'),
    producerApiBaseUrl = config.get('producerApi:url');

var producerApi = {
    produce: producerApiBaseUrl + '/produce',
    report: producerApiBaseUrl + '/report'
};

module.exports = producerApi;
