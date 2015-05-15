'use strict';

var logger = require('../logger');

exports.index = function(req, res, next) {
    res.json(200, {"status": "Still Alive!"});
    logger.log('info', 'Heartbeat route requested');
    next();
};