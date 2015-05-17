'use strict';

var config = require('../configuration'),
    logger = require('../logger'),
    math = require('mathjs'),
    request = require('request'),
    utils = require('../lib/utils'),
    producerApi = require('../lib/producerApi');

exports.consume = function(req, res, next) {

    request.post(producerApi.produce, function(error, response, body) {
        if (!error && response.statusCode == 201) {
            var json = JSON.parse(body),
                expression = json.expression;

            // check format of expression from producer
            if (utils.checkExpressionFormat(expression)) {

                // safely eval expression
                var solution = math.eval(expression.replace('=', '')),
                    solutionMsg = expression + solution;

                logger.log('info', 'Success: ' + solutionMsg);

                // report solution back to producer
                request.post({
                    url: producerApi.report,
                    formData: {
                        expression: expression,
                        solution: solution
                    }
                }, function(error, response, body) {
                    if (!error && response.statusCode == 201) {
                        logger.log('info', 'Solution: %s reported to producer', solutionMsg);
                        res.json(200, JSON.parse(response.body));
                    }
                    else {
                        res.json(400, {'error': error});
                    }

                    next();
                });
            }
            else {
                // expression did not pass format check
                var msg = 'Bad expression format: ' + expression;
                logger.log('error', msg);
                res.json(400, {'error': msg});

                next();
            }
        }
        else {
            // handle error
            logger.log('error', 'Error: ' + error);
            res.json(400, {'error': error});

            next();
        }
    });

};
