'use strict';

var assert = require('assert'),
    utils = require('../lib/utils');


describe('Utils', function() {
    describe('When checking a string from the expression producer', function() {
        it('should validate a format of int + int =', function() {
            var goodExpression = '1+1=',
                badExpression = 'alert("All your base are belong to us")',
                almostGoodExpression = '1+1';

            assert(utils.checkExpressionFormat(goodExpression));
            assert(!utils.checkExpressionFormat(badExpression));
            assert(!utils.checkExpressionFormat(almostGoodExpression));
        });
    });
});